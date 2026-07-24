"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";

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
  email: string | null;
};

const UserContext = createContext<UserContextValue>({
  user: null,
  loading: true,
  error: null,
  email: null,
});

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const [user, setUser] = useState<DashboardUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!email) {
      setLoading(false);
      setError("No email found.");
      return;
    }

    let cancelled = false;

    async function loadUser(userEmail: string) {
      try {
        const response = await fetch(
          `/api/dashboard?email=${encodeURIComponent(userEmail)}`
        );

        const data = await response.json();

        if (cancelled) return;

        if (!response.ok) {
          setError(data.error || "Unable to load account.");
          setUser(null);
        } else {
          setUser(data);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to load account.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadUser(email);

    return () => {
      cancelled = true;
    };
  }, [email]);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        email,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}