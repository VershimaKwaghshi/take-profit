"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type DashboardUser = {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  referral_code: string | null;
  referral_count: number | null;
  email_verified: boolean;
  created_at: string;
};

type UserContextValue = {
  user: DashboardUser | null;
  loading: boolean;
  error: string | null;
};

const UserContext = createContext<UserContextValue>({
  user: null,
  loading: true,
  error: null,
});

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<DashboardUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("tp_email");

    if (!email) {
      setLoading(false);
      setError("Please log in again.");
      return;
    }

    async function loadUser() {
      try {
        const response = await fetch(
          `/api/dashboard?email=${encodeURIComponent(email)}`
        );

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "Unable to load account.");
          return;
        }

        setUser(data);
      } catch {
        setError("Unable to load account.");
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}