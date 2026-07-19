"use client";

import { useUser } from "@/app/dashboard/UserProvider";

export default function Topbar() {
  const { user, loading } = useUser();

  const initial = user?.first_name
    ? user.first_name.charAt(0).toUpperCase()
    : "?";

  return (
    <header className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-semibold tracking-tight">
          {loading
            ? "Welcome back"
            : `Welcome back, ${user?.first_name ?? "there"}`}
        </h1>

        <p className="mt-2 text-neutral-500 text-lg">
          Manage your referrals from one place.
        </p>

      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-full border border-neutral-300 bg-white px-6 py-3 transition hover:bg-neutral-100">

          Notifications

        </button>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">

          {initial}

        </div>

      </div>

    </header>
  );
}
