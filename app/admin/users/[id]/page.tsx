"use client";

import { useEffect, useState } from "react";

export default function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(`/api/admin/users/${params.id}`);
      const data = await response.json();

      setUser(data);
      setLoading(false);
    }

    loadUser();
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="mx-auto max-w-5xl p-10">

        <div className="rounded-[36px] bg-white p-10 shadow">

          <h1 className="text-4xl font-semibold">
            {user.first_name} {user.last_name}
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <div>
              <p className="text-neutral-500">Email</p>
              <p className="text-xl">{user.email}</p>
            </div>

            <div>
              <p className="text-neutral-500">Country</p>
              <p className="text-xl">{user.country}</p>
            </div>

            <div>
              <p className="text-neutral-500">Referral Code</p>
              <p className="text-xl">
                {user.referral_code || "None"}
              </p>
            </div>

            <div>
              <p className="text-neutral-500">Referrals</p>
              <p className="text-xl">
                {user.referral_count ?? 0}
              </p>
            </div>

            <div>
              <p className="text-neutral-500">Verified</p>

              <p className="text-xl">
                {user.email_verified ? "Yes" : "No"}
              </p>
            </div>

            <div>
              <p className="text-neutral-500">Joined</p>

              <p className="text-xl">
                {new Date(user.created_at).toLocaleString()}
              </p>
            </div>

          </div>

          <div className="mt-12 flex gap-4">

            <button className="rounded-full bg-blue-600 px-6 py-3 text-white">
              Edit User
            </button>

            <button className="rounded-full bg-black px-6 py-3 text-white">
              Reset Referral
            </button>

            <button className="rounded-full bg-red-600 px-6 py-3 text-white">
              Suspend User
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
