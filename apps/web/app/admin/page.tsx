"use client";

import { useState, useEffect } from "react";
import { Shield, LogIn, FolderOpen, Clock, CheckCircle2, Eye, AlertCircle, Search, MapPin, Calendar, User, ArrowLeft, Banknote, Mail, Phone } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  submitted: { label: "Soumis", color: "bg-blue-100 text-blue-700" },
  viewed: { label: "Vu", color: "bg-amber-100 text-amber-700" },
  quoted: { label: "Devis envoyé", color: "bg-purple-100 text-purple-700" },
  accepted: { label: "Accepté", color: "bg-emerald-100 text-emerald-700" },
  rejected: { label: "Refusé", color: "bg-red-100 text-red-700" },
  completed: { label: "Terminé", color: "bg-stone-100 text-stone-600" },
};

const VALID_STATUSES = ["submitted", "viewed", "quoted", "accepted", "rejected", "completed"];

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [projets, setProjets] = useState<any[]>([]);
  const [stats, setStats] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedProjet, setSelectedProjet] = useState<any>(null);
  const [updating, setUpdating] = useState(false);

  // Check saved token on mount
  useEffect(() => {
    const saved = localStorage.getItem("bati_admin_token");
    if (saved) setToken(saved);
  }, []);

  // Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      const res = await fetch(`${API_URL}/store/clients/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erreur");
      if (data.client?.email !== "contact@bati.ma") {
        throw new Error("Accès réservé à l'administrateur");
      }
      localStorage.setItem("bati_admin_token", data.token);
      setToken(data.token);
    } catch (err: any) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  // Load projects
  useEffect(() => {
    if (!token) return;
    (async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({ limit: "200" });
        if (statusFilter !== "all") params.set("status", statusFilter);
        const res = await fetch(`${API_URL}/admin/project-requests?${params}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setProjets(data.project_requests || []);

        // Compute stats from all projects
        if (statusFilter === "all") {
          const counts: Record<string, number> = {};
          for (const r of data.project_requests) {
            counts[r.status] = (counts[r.status] || 0) + 1;
          }
          setStats(counts);
        }
      } catch {
        setProjets([]);
      }
      setLoading(false);
    })();
  }, [token, statusFilter]);

  // Update status
  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdating(true);
    try {
      const res = await fetch(`${API_URL}/admin/project-requests/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        const data = await res.json();
        setSelectedProjet(data.project_request);
        setProjets((prev) =>
          prev.map((p) => (p.id === id ? data.project_request : p))
        );
      }
    } catch {}
    setUpdating(false);
  };

  const logout = () => {
    localStorage.removeItem("bati_admin_token");
    setToken(null);
    setSelectedProjet(null);
  };

  // ─── Login screen ─────────────────────────────────────────────────────────
  if (!token) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-full bg-[#b5522a]/10 mb-3">
              <Shield className="h-8 w-8 text-[#b5522a]" />
            </div>
            <h1 className="text-2xl font-bold text-stone-900">Admin Bati.ma</h1>
            <p className="text-sm text-stone-500 mt-1">Gestion des projets soumis</p>
          </div>
          <form onSubmit={handleLogin} className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#b5522a]/20 focus:border-[#b5522a]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#b5522a]/20 focus:border-[#b5522a]"
                required
              />
            </div>
            {loginError && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{loginError}</p>
            )}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-[#b5522a] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#9a4523] transition-colors disabled:opacity-50"
            >
              {loginLoading ? "Connexion..." : "Se connecter"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Detail view ──────────────────────────────────────────────────────────
  if (selectedProjet) {
    const p = selectedProjet;
    const status = STATUS_LABELS[p.status] || STATUS_LABELS.submitted;
    const budget =
      p.budget_min && p.budget_max
        ? `${Number(p.budget_min).toLocaleString("fr-MA")} - ${Number(p.budget_max).toLocaleString("fr-MA")} MAD`
        : p.budget_min
        ? `À partir de ${Number(p.budget_min).toLocaleString("fr-MA")} MAD`
        : p.budget_max
        ? `Jusqu'à ${Number(p.budget_max).toLocaleString("fr-MA")} MAD`
        : "Non défini";

    return (
      <div className="min-h-screen bg-stone-50">
        <header className="bg-white border-b border-stone-200 px-4 py-3">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button onClick={() => setSelectedProjet(null)} className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900">
              <ArrowLeft className="h-4 w-4" /> Retour
            </button>
            <button onClick={logout} className="text-xs text-stone-400 hover:text-red-600">Déconnexion</button>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full ${status.color}`}>{status.label}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">{p.project_type}</span>
          </div>
          <h2 className="text-xl font-bold text-stone-900 mb-6">{p.title}</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-stone-200 p-5">
              <h3 className="font-semibold text-stone-900 mb-3">Client</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><User className="h-4 w-4 text-stone-400" />{p.client_name}</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-stone-400" /><a href={`mailto:${p.client_email}`} className="text-[#b5522a]">{p.client_email}</a></div>
                {p.client_phone && <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-stone-400" />{p.client_phone}</div>}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-stone-200 p-5">
              <h3 className="font-semibold text-stone-900 mb-3">Projet</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-stone-400" />{p.location}{p.address ? ` — ${p.address}` : ""}</div>
                <div className="flex items-center gap-2"><Banknote className="h-4 w-4 text-stone-400" />{budget}</div>
                {p.timeline && <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-stone-400" />{p.timeline}</div>}
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-stone-400" />{new Date(p.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</div>
              </div>
            </div>
          </div>

          {p.description && (
            <div className="bg-white rounded-xl border border-stone-200 p-5 mb-6">
              <h3 className="font-semibold text-stone-900 mb-2">Description</h3>
              <p className="text-sm text-stone-600 whitespace-pre-wrap">{p.description}</p>
            </div>
          )}

          <div className="bg-white rounded-xl border border-stone-200 p-5">
            <h3 className="font-semibold text-stone-900 mb-3">Changer le statut</h3>
            <div className="flex flex-wrap gap-2">
              {VALID_STATUSES.map((s) => (
                <button
                  key={s}
                  disabled={updating || p.status === s}
                  onClick={() => handleStatusChange(p.id, s)}
                  className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                    p.status === s
                      ? "bg-[#b5522a] text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 disabled:opacity-50"
                  }`}
                >
                  {STATUS_LABELS[s]?.label || s}
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ─── List view ────────────────────────────────────────────────────────────
  const filtered = search
    ? projets.filter(
        (p) =>
          p.title?.toLowerCase().includes(search.toLowerCase()) ||
          p.client_name?.toLowerCase().includes(search.toLowerCase()) ||
          p.location?.toLowerCase().includes(search.toLowerCase())
      )
    : projets;

  const STATS_CONFIG = [
    { key: "submitted", label: "En attente", icon: Clock, color: "text-blue-600 bg-blue-50" },
    { key: "viewed", label: "Vues", icon: Eye, color: "text-amber-600 bg-amber-50" },
    { key: "quoted", label: "Devis", icon: AlertCircle, color: "text-purple-600 bg-purple-50" },
    { key: "accepted", label: "Acceptés", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#b5522a]" />
            <h1 className="font-bold text-stone-900">Admin Bati.ma</h1>
          </div>
          <button onClick={logout} className="text-xs text-stone-400 hover:text-red-600">Déconnexion</button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {STATS_CONFIG.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.key} className="bg-white rounded-xl border border-stone-200 p-4">
                <div className={`inline-flex p-1.5 rounded-lg ${s.color} mb-2`}>
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-xl font-bold text-stone-900">{stats[s.key] || 0}</p>
                <p className="text-xs text-stone-500">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5522a]/20"
            />
          </div>
          <div className="flex gap-1 flex-wrap">
            {[{ value: "all", label: "Tous" }, ...Object.entries(STATUS_LABELS).map(([k, v]) => ({ value: k, label: v.label }))].map((f) => (
              <button
                key={f.value}
                onClick={() => setStatusFilter(f.value)}
                className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                  statusFilter === f.value ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => <div key={i} className="h-20 rounded-xl bg-stone-100 animate-pulse" />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-sm text-stone-500">Aucun projet</div>
        ) : (
          <div className="space-y-2">
            {filtered.map((p: any) => {
              const st = STATUS_LABELS[p.status] || STATUS_LABELS.submitted;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProjet(p)}
                  className="w-full text-left bg-white rounded-xl border border-stone-200 p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${st.color}`}>{st.label}</span>
                    <span className="text-xs text-stone-400">{p.project_type}</span>
                  </div>
                  <h3 className="font-semibold text-stone-900 text-sm">{p.title}</h3>
                  <div className="flex gap-3 mt-1 text-xs text-stone-400">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" />{p.client_name}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{p.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(p.created_at).toLocaleDateString("fr-FR")}</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
