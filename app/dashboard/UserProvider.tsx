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
      try {
        const email = localStorage.getItem("tp-email");

        if (!email) {
          alert("❌ tp-email not found in localStorage");
          setLoading(false);
          return;
        }

        alert(`📧 Email: ${email}`);

        const response = await fetch(
          `/api/dashboard?email=${encodeURIComponent(email)}`
        );

        alert(`📡 API Status: ${response.status}`);

        if (!response.ok) {
          const error = await response.text();
          alert(error);
          setLoading(false);
          return;
        }

        const data = await response.json();

        alert(JSON.stringify(data, null, 2));

        setUser(data);
      } catch (err: any) {
        alert(err?.message || "Unknown error");
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}