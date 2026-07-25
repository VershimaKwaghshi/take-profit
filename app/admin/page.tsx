"use client";

import { useEffect, useState } from "react";

type Stats = {
  totalUsers: number;
  verifiedUsers: number;
  totalReferrals: number;
  announcements: number;
};

export default function AdminPage() {
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

  return (
    <main className="p-10">

      <h1 className="text-5xl font-semibold">
        Dashboard
      </h1>

      <p className="mt-3 text-neutral-500">
        Welcome back, Administrator.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-[30px] bg-blue-600 p-8 text-white">

          <p>Total Users</p>

          <h2 className="mt-5 text-5xl font-bold">
            {loading ? "..." : stats.totalUsers}
          </h2>

        </div>

        <div className="rounded-[30px] bg-red-600 p-8 text-white">

          <p>Verified Users</p>

          <h2 className="mt-5 text-5xl font-bold">
            {loading ? "..." : stats.verifiedUsers}
          </h2>

        </div>

        <div className="rounded-[30px] bg-black p-8 text-white">

          <p>Total Referrals</p>

          <h2 className="mt-5 text-5xl font-bold">
            {loading ? "..." : stats.totalReferrals}
          </h2>

        </div>

        <div className="rounded-[30px] bg-white p-8 shadow">

          <p>Announcements</p>

          <h2 className="mt-5 text-5xl font-bold">
            {loading ? "..." : stats.announcements}
          </h2>

        </div>

      </div>

    </main>
  );
}
