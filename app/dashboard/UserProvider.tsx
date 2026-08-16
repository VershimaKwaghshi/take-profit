"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  referral_code: string;
  referral_count: number;
  email_verified: boolean;
  created_at: string;
  is_admin: boolean;
  has_referrer: boolean;
};

const UserContext = createContext<{
  user: User | null;
  loading: boolean;
  refresh: () => void;
}>({
  user: null,
  loading: true,
  refresh: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    try {
      const response = await fetch("/api/dashboard");

      if (!response.ok) {
        setLoading(false);
        return;
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, refresh: loadUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
