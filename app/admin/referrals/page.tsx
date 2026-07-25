"use client";

import { useEffect, useState } from "react";

type ReferralUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  referral_code: string;
  referral_count: number;
};

export default function ReferralPage() {
  const [users, setUsers] = useState<ReferralUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const response = await fetch("/api/admin/referrals");
      const data = await response.json();

      setUsers(data);
      setLoading(false);
    }

    load();
  }, []);

  return (
    <main className="p-10">

      <h1 className="text-5xl font-semibold">
        Referral Management
      </h1>

      <p className="mt-3 text-neutral-500">
        Monitor referral performance.
      </p>

      <div className="mt-10 rounded-[30px] bg-white shadow overflow-hidden">

        <table className="w-full">

          <thead className="border-b">

            <tr>

              <th className="p-5 text-left">User</th>

              <th className="p-5 text-left">Referral Code</th>

              <th className="p-5 text-left">Referrals</th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={3}
                  className="p-10 text-center"
                >
                  Loading...
                </td>

              </tr>

            ) : (

              users.map((user) => (

                <tr
                  key={user.id}
                  className="border-b"
                >

                  <td className="p-5">

                    <div className="font-medium">

                      {user.first_name} {user.last_name}

                    </div>

                    <div className="text-neutral-500 text-sm">

                      {user.email}

                    </div>

                  </td>

                  <td className="p-5">

                    {user.referral_code}

                  </td>

                  <td className="p-5 font-semibold">

                    {user.referral_count}

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </main>
  );
}
