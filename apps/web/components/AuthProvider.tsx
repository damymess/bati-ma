"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  getMe,
  getMeClient,
  logout as authLogout,
  decodeToken,
  type ArchitectProfile,
  type ClientProfile,
} from "@/lib/auth";

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

function architectToUser(profile: ArchitectProfile): User {
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

function clientToUser(profile: ClientProfile): User {
  const parts = profile.name.split(" ");
  return {
    id: profile.id,
    email: profile.email,
    first_name: parts[0] || "",
    last_name: parts.slice(1).join(" ") || "",
    role: "client",
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    setLoading(true);
    try {
      const decoded = decodeToken();
      if (!decoded) {
        setUser(null);
        setLoading(false);
        return;
      }

      if (decoded.role === "client") {
        const me = await getMeClient();
        setUser(me ? clientToUser(me) : null);
      } else {
        const me = await getMe();
        setUser(me ? architectToUser(me) : null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
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
