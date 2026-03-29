"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getMe, logout as authLogout, type ArchitectProfile } from "@/lib/auth";

export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: "architect" | "client";
  architect_profile_id?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  refresh: () => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refresh: async () => {},
  logout: () => {},
});

function profileToUser(profile: ArchitectProfile): User {
  const parts = profile.name.split(" ");
  return {
    id: profile.id,
    email: profile.email,
    first_name: parts[0] || "",
    last_name: parts.slice(1).join(" ") || "",
    role: "architect",
    architect_profile_id: profile.id,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    setLoading(true);
    const me = await getMe();
    setUser(me ? profileToUser(me) : null);
    setLoading(false);
  };

  const logout = () => {
    authLogout();
    setUser(null);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refresh, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
