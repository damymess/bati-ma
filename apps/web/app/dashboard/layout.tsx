"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  User,
  FolderOpen,
  MessageSquare,
  LogOut,
  Building2,
} from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/connexion");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-300 border-t-[#b5522a]" />
      </div>
    );
  }

  if (!user) return null;

  const isArchitect = user.role === "architect";
  const basePath = isArchitect ? "/dashboard/architecte" : "/dashboard/client";

  const navItems = isArchitect
    ? [
        { href: basePath, icon: LayoutDashboard, label: "Vue d'ensemble" },
        { href: `${basePath}/profil`, icon: User, label: "Mon profil" },
        { href: `${basePath}/projets`, icon: FolderOpen, label: "Projets reçus" },
        { href: `${basePath}/forum`, icon: MessageSquare, label: "Forum" },
      ]
    : [
        { href: basePath, icon: LayoutDashboard, label: "Vue d'ensemble" },
        { href: `${basePath}/projets`, icon: FolderOpen, label: "Mes projets" },
        { href: `${basePath}/devis`, icon: Building2, label: "Devis reçus" },
      ];

  return (
    <div className="min-h-[calc(100vh-10rem)]">
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-stone-900">
                {isArchitect ? "Espace Architecte" : "Espace Client"}
              </h1>
              <p className="text-xs text-stone-500">
                {user.first_name} {user.last_name} · {user.email}
              </p>
            </div>
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

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <nav className="md:w-56 flex-shrink-0">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
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
