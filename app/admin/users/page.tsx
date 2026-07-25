"use client";

import { useEffect, useMemo, useState } from "react";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  referral_code: string | null;
  referral_count: number | null;
  email_verified: boolean;
  created_at: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("/api/admin/users");
      const data = await response.json();

      setUsers(data);
      setLoading(false);
    }

    loadUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const query = search.toLowerCase();

      return (
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.country.toLowerCase().includes(query) ||
        (user.referral_code || "")
          .toLowerCase()
          .includes(query)
      );
    });
  }, [users, search]);

  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-8 py-8">

          <h1 className="text-4xl font-semibold">
            Users
          </h1>

          <p className="mt-2 text-neutral-500">
            {filteredUsers.length} users found
          </p>

        </div>

      </div>

      <div className="mx-auto max-w-7xl p-8">

        <div className="mb-8 rounded-[30px] bg-white p-6 shadow">

          <input
            type="text"
            placeholder="Search by name, email, country or referral code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none focus:border-blue-600"
          />

        </div>

        <div className="overflow-hidden rounded-[30px] bg-white shadow">

          <table className="w-full">

            <thead className="bg-neutral-100">

              <tr>

                <th className="p-5 text-left">Name</th>

                <th className="p-5 text-left">Email</th>

                <th className="p-5 text-left">Country</th>

                <th className="p-5 text-left">Referrals</th>

                <th className="p-5 text-left">Verified</th>

                <th className="p-5 text-left">Action</th>

              </tr>

            </thead>

            <tbody>

              {loading && (

                <tr>

                  <td colSpan={6} className="p-8 text-center">

                    Loading...

                  </td>

                </tr>

              )}

              {!loading &&
                filteredUsers.map((user) => (

                  <tr
                    key={user.id}
                    className="border-t"
                  >

                    <td className="p-5">

                      {user.first_name} {user.last_name}

                    </td>

                    <td className="p-5">

                      {user.email}

                    </td>

                    <td className="p-5">

                      {user.country}

                    </td>

                    <td className="p-5">

                      {user.referral_count ?? 0}

                    </td>

                    <td className="p-5">

                      {user.email_verified ? "✅" : "❌"}

                    </td>

                    <td className="p-5">

                      <a
                        href={`/admin/users/${user.id}`}
                        className="rounded-full bg-blue-600 px-5 py-2 text-white"
                      >
                        View
                      </a>

                    </td>

                  </tr>

                ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
