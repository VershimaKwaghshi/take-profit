"use client";

import { useEffect, useState } from "react";

type Stats = {
  totalUsers: number;
  verifiedUsers: number;
  totalReferrals: number;
  announcements: number;
};

export default function AdminDashboard() {

  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    verifiedUsers: 0,
    totalReferrals: 0,
    announcements: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadDashboard() {

      const response = await fetch("/api/admin/dashboard");

      const data = await response.json();

      setStats(data);

      setLoading(false);

    }

    loadDashboard();

  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (

    <main className="min-h-screen bg-neutral-100">

      <div className="mx-auto max-w-7xl p-10">

        <h1 className="text-5xl font-semibold">
          Admin Dashboard
        </h1>

        <p className="mt-3 text-neutral-500">
          Everything happening inside Take Profit.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-[30px] bg-white p-8 shadow">

            <p className="text-neutral-500">
              Total Users
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              {stats.totalUsers}
            </h2>

          </div>

          <div className="rounded-[30px] bg-blue-600 p-8 text-white shadow">

            <p>
              Verified Users
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              {stats.verifiedUsers}
            </h2>

          </div>

          <div className="rounded-[30px] bg-red-600 p-8 text-white shadow">

            <p>
              Total Referrals
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              {stats.totalReferrals}
            </h2>

          </div>

          <div className="rounded-[30px] bg-black p-8 text-white shadow">

            <p>
              Announcements
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              {stats.announcements}
            </h2>

          </div>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <a
            href="/admin/users"
            className="rounded-[30px] bg-white p-8 shadow transition hover:shadow-xl"
          >
            <h2 className="text-3xl font-semibold">
              Users
            </h2>

            <p className="mt-4 text-neutral-600">
              View every registered trader.
            </p>

          </a>

          <a
            href="/admin/announcements"
            className="rounded-[30px] bg-white p-8 shadow transition hover:shadow-xl"
          >
            <h2 className="text-3xl font-semibold">
              Announcements
            </h2>

            <p className="mt-4 text-neutral-600">
              Publish platform announcements.
            </p>

          </a>

        </div>

      </div>

    </main>

  );

}