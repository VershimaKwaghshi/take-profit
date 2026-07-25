"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {

    async function loadUsers() {

      const response = await fetch("/api/admin/users");

      const data = await response.json();

      setUsers(data);

      setLoading(false);

    }

    loadUsers();

  }, []);

  return (

    <main className="min-h-screen bg-neutral-100">

      <div className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-8 py-8">

          <h1 className="text-4xl font-semibold">
            Users
          </h1>

        </div>

      </div>

      <div className="mx-auto max-w-7xl p-8">

        <div className="rounded-[30px] bg-white shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-neutral-100">

              <tr>

                <th className="p-5 text-left">
                  Name
                </th>

                <th className="p-5 text-left">
                  Email
                </th>

                <th className="p-5 text-left">
                  Country
                </th>

                <th className="p-5 text-left">
                  Referrals
                </th>

                <th className="p-5 text-left">
                  Verified
                </th>

              </tr>

            </thead>

            <tbody>

              {loading && (

                <tr>

                  <td
                    colSpan={5}
                    className="p-10 text-center"
                  >
                    Loading...
                  </td>

                </tr>

              )}

              {!loading && users.map((user) => (

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

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>

  );

}
