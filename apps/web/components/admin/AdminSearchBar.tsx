"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, FolderOpen, Users, Star, X } from "lucide-react";
import { adminGlobalSearch } from "@/lib/api";

type SearchResults = Awaited<ReturnType<typeof adminGlobalSearch>>;

export default function AdminSearchBar() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (q.trim().length < 2) {
      setResults(null);
      return;
    }
    setLoading(true);
    const t = setTimeout(async () => {
      try {
        const data = await adminGlobalSearch(q);
        setResults(data);
      } catch {}
      setLoading(false);
    }, 250);
    return () => clearTimeout(t);
  }, [q]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const totalResults =
    (results?.leads.length || 0) +
    (results?.architects.length || 0) +
    (results?.reviews.length || 0);

  return (
    <div ref={ref} className="relative">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
        <input
          type="text"
          placeholder="Rechercher partout..."
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => q && setOpen(true)}
          className="w-48 sm:w-64 pl-8 pr-7 py-1.5 text-xs border border-stone-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#b5522a]/20 focus:border-[#b5522a]"
        />
        {q && (
          <button
            onClick={() => {
              setQ("");
              setResults(null);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-stone-100"
            aria-label="Effacer"
          >
            <X className="h-3 w-3 text-stone-400" />
          </button>
        )}
      </div>

      {open && q.length >= 2 && (
        <div className="absolute right-0 mt-1 w-80 sm:w-96 rounded-xl border border-stone-200 bg-white shadow-xl z-50 overflow-hidden">
          {loading ? (
            <div className="py-6 text-center text-xs text-stone-400">Recherche...</div>
          ) : totalResults === 0 ? (
            <div className="py-6 text-center text-xs text-stone-400">Aucun résultat</div>
          ) : (
            <div className="max-h-96 overflow-y-auto">
              {/* Leads */}
              {results!.leads.length > 0 && (
                <div>
                  <p className="px-3 py-1.5 text-[10px] uppercase tracking-widest font-medium text-stone-500 bg-stone-50 sticky top-0">
                    Leads ({results!.leads.length})
                  </p>
                  {results!.leads.map((l: any) => (
                    <Link
                      key={l.id}
                      href={`/dashboard/admin/projets/${l.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-2 px-3 py-2 hover:bg-stone-50 border-t border-stone-100"
                    >
                      <FolderOpen className="h-4 w-4 text-[#b5522a] mt-0.5 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-stone-900 truncate">
                          {l.title}
                        </p>
                        <p className="text-[10px] text-stone-500 truncate">
                          {l.client_name} · {l.client_email}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Architectes */}
              {results!.architects.length > 0 && (
                <div>
                  <p className="px-3 py-1.5 text-[10px] uppercase tracking-widest font-medium text-stone-500 bg-stone-50 sticky top-0">
                    Architectes ({results!.architects.length})
                  </p>
                  {results!.architects.map((a: any) => (
                    <a
                      key={a.id}
                      href={`/architecte/casablanca/${a.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-2 px-3 py-2 hover:bg-stone-50 border-t border-stone-100"
                    >
                      <Users className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-stone-900 truncate">
                          {a.name}
                          {a.verified && <span className="ml-1 text-green-600 text-[10px]">✓</span>}
                        </p>
                        <p className="text-[10px] text-stone-500 truncate">{a.email}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* Reviews */}
              {results!.reviews.length > 0 && (
                <div>
                  <p className="px-3 py-1.5 text-[10px] uppercase tracking-widest font-medium text-stone-500 bg-stone-50 sticky top-0">
                    Avis ({results!.reviews.length})
                  </p>
                  {results!.reviews.map((r: any) => (
                    <Link
                      key={r.id}
                      href="/dashboard/admin/avis"
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-2 px-3 py-2 hover:bg-stone-50 border-t border-stone-100"
                    >
                      <Star className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-stone-900 truncate">
                          {r.title || `Avis de ${r.client_name}`}
                        </p>
                        <p className="text-[10px] text-stone-500 truncate">
                          {r.client_name} · {r.rating}★ · {r.status}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
