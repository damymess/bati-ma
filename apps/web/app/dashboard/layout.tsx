"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  User,
  FolderOpen,
  MessageSquare,
  LogOut,
  Building2,
  Crown,
  Shield,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { fetchAdminStats } from "@/lib/api";
import AdminSearchBar from "@/components/admin/AdminSearchBar";

type AdminStats = Awaited<ReturnType<typeof fetchAdminStats>>;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [adminStats, setAdminStats] = useState<AdminStats | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/connexion");
    }
  }, [user, loading, router]);

  // Fetch admin stats for sidebar badges (uniquement en mode admin)
  const inAdminMode = pathname.startsWith("/dashboard/admin");
  const isAdmin = user?.email === "contact@bati.ma";

  useEffect(() => {
    if (!inAdminMode || !isAdmin) return;
    fetchAdminStats()
      .then(setAdminStats)
      .catch(() => {});
  }, [inAdminMode, isAdmin, pathname]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-300 border-t-[#b5522a]" />
      </div>
    );
  }

  if (!user) return null;

  const isArchitect = user.role === "architect";
  const basePath = pathname.startsWith("/dashboard/admin")
    ? "/dashboard/admin"
    : isArchitect
    ? "/dashboard/architecte"
    : "/dashboard/client";

  // Sidebar items avec badges pour l'admin
  const navItems = pathname.startsWith("/dashboard/admin") && isAdmin
    ? [
        { href: "/dashboard/admin", icon: LayoutDashboard, label: "Vue d'ensemble", badge: 0 },
        {
          href: "/dashboard/admin/projets",
          icon: FolderOpen,
          label: "Projets soumis",
          badge: adminStats ? (adminStats.leads.hot + adminStats.leads.to_verify) : 0,
        },
        {
          href: "/dashboard/admin/architectes",
          icon: User,
          label: "Architectes inscrits",
          badge: 0,
        },
        {
          href: "/dashboard/admin/avis",
          icon: Star,
          label: "Avis à modérer",
          badge: adminStats?.reviews_pending || 0,
        },
        {
          href: "/dashboard/admin/verifications",
          icon: ShieldCheck,
          label: "Vérifications",
          badge: adminStats?.verifications_pending || 0,
        },
      ]
    : isArchitect
    ? [
        { href: basePath, icon: LayoutDashboard, label: "Vue d'ensemble", badge: 0 },
        { href: `${basePath}/profil`, icon: User, label: "Mon profil", badge: 0 },
        { href: `${basePath}/projets`, icon: FolderOpen, label: "Demandes de devis", badge: 0 },
        { href: `${basePath}/abonnement`, icon: Crown, label: "Abonnement", badge: 0 },
        { href: `${basePath}/verification`, icon: ShieldCheck, label: "Vérification", badge: 0 },
        { href: `${basePath}/forum`, icon: MessageSquare, label: "Forum", badge: 0 },
      ]
    : [
        { href: basePath, icon: LayoutDashboard, label: "Vue d'ensemble", badge: 0 },
        { href: `${basePath}/projets`, icon: FolderOpen, label: "Mes projets", badge: 0 },
        { href: `${basePath}/devis`, icon: Building2, label: "Devis reçus", badge: 0 },
      ];

  return (
    <div className="min-h-[calc(100vh-10rem)]">
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-lg font-bold text-stone-900">
                {pathname.startsWith("/dashboard/admin")
                  ? "Administration"
                  : isArchitect
                  ? "Espace Architecte"
                  : "Espace Client"}
              </h1>
              <p className="text-xs text-stone-500">
                {user.first_name} {user.last_name} · {user.email}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {inAdminMode && isAdmin && <AdminSearchBar />}
              {isAdmin && !pathname.startsWith("/dashboard/admin") && (
                <Link
                  href="/dashboard/admin"
                  className="flex items-center gap-1.5 text-xs text-[#b5522a] hover:text-[#9a4523] transition-colors"
                >
                  <Shield className="h-4 w-4" />
                  Admin
                </Link>
              )}
              {isAdmin && pathname.startsWith("/dashboard/admin") && (
                <Link
                  href={isArchitect ? "/dashboard/architecte" : "/dashboard/client"}
                  className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <User className="h-4 w-4" />
                  Mon espace
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  router.push("/");
                }}
                className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <nav className="md:w-56 flex-shrink-0">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  item.href === basePath
                    ? pathname === basePath
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-stone-100 text-stone-900 font-medium"
                          : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? "text-[#b5522a]" : ""}`} />
                      <span className="flex-1">{item.label}</span>
                      {item.badge > 0 && (
                        <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-semibold bg-red-500 text-white rounded-full">
                          {item.badge > 99 ? "99+" : item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
