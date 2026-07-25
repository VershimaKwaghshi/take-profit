"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserProvider, useUser } from "@/app/dashboard/UserProvider";

function Guard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (!user.is_admin) {
      router.replace("/dashboard");
    }
  }, [loading, user, router]);

  if (loading || !user || !user.is_admin) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-100">
        Loading...
      </main>
    );
  }

  return <>{children}</>;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <Guard>{children}</Guard>
    </UserProvider>
  );
}