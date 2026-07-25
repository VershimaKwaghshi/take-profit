"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
};

const UserContext = createContext<{
  user: User | null;
  loading: boolean;
}>({
  user: null,
  loading: true,
});

export function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const email = localStorage.getItem("tp-email");

      if (!email) {
        setLoading(false);
        return;
      }

      const response = await fetch(
        `/api/dashboard?email=${encodeURIComponent(email)}`
      );

      if (!response.ok) {
        setLoading(false);
        return;
      }

      const data = await response.json();

      setUser(data);
      setLoading(false);
    }

    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}