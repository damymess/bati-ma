"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function DashboardRedirect() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace(
        user.role === "architect"
          ? "/dashboard/architecte"
          : "/dashboard/client"
      );
    }
  }, [user, loading, router]);

  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-300 border-t-[#b5522a]" />
    </div>
  );
}
