"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  email_verified: boolean;
  referral_count: number;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("/api/admin/users");
      const data = await response.json();
      setUsers(data);
    }

    loadUsers();
  }, []);

  return (
    <main className="p-10">

      <h1 className="text-5xl font-semibold">
        Users
      </h1>

      <div className="mt-10 rounded-[30px] bg-white shadow overflow-hidden">

        <table className="w-full">

          <thead className="border-b">

            <tr>

              <th className="p-5 text-left">
                Name
              </th>

              <th className="p-5 text-left">
                Country
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-left">
                Referrals
              </th>

              <th className="p-5"></th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-b"
              >

                <td className="p-5">

                  <div className="font-medium">

                    {user.first_name} {user.last_name}

                  </div>

                  <div className="text-sm text-neutral-500">

                    {user.email}

                  </div>

                </td>

                <td className="p-5">
                  {user.country}
                </td>

                <td className="p-5">

                  {user.email_verified
                    ? "Verified"
                    : "Pending"}

                </td>

                <td className="p-5">
                  {user.referral_count}
                </td>

                <td className="p-5">

                  <Link
                    href={`/admin/users/${user.id}`}
                    className="rounded-full bg-black px-5 py-2 text-white"
                  >
                    Open
                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}