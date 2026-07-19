"use client";

import Link from "next/link";
import { Search, Calendar } from "lucide-react";

const referrals = [
  {
    id: 1,
    name: "John Doe",
    country: "Nigeria",
    joined: "18 Jul 2026",
    lastActive: "Today",
    status: "Verified",
  },
  {
    id: 2,
    name: "Mary Smith",
    country: "Ghana",
    joined: "17 Jul 2026",
    lastActive: "Yesterday",
    status: "Pending",
  },
  {
    id: 3,
    name: "David Musa",
    country: "Kenya",
    joined: "15 Jul 2026",
    lastActive: "18 Jul 2026",
    status: "Verified",
  },
  {
    id: 4,
    name: "Sarah Bello",
    country: "South Africa",
    joined: "12 Jul 2026",
    lastActive: "17 Jul 2026",
    status: "Verified",
  },
  {
    id: 5,
    name: "Emmanuel James",
    country: "Zambia",
    joined: "10 Jul 2026",
    lastActive: "15 Jul 2026",
    status: "Pending",
  },
];

export default function ReferralsPage() {
  return (
    <main className="min-h-screen bg-neutral-100 p-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-4xl font-semibold">
              Referrals
            </h1>

            <p className="text-neutral-500 mt-2">
              Track everyone who joins through your referral link.
            </p>

          </div>

          <button className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3">

            <Calendar size={18} />

            Calendar

          </button>

        </div>

        <div className="rounded-3xl bg-white border border-neutral-200 shadow-sm overflow-hidden">

          <div className="flex items-center justify-between p-8 border-b border-neutral-200">

            <h2 className="text-2xl font-semibold">
              All Referrals
            </h2>

            <div className="relative">

              <Search
                size={18}
                className="absolute left-4 top-4 text-neutral-400"
              />

              <input
                placeholder="Search"
                className="rounded-full border border-neutral-300 pl-11 pr-5 py-3 outline-none"
              />

            </div>

          </div>

          <table className="w-full">

            <thead>

              <tr className="text-left text-neutral-500">

                <th className="p-6">Name</th>

                <th>Country</th>

                <th>Joined</th>

                <th>Last Active</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {referrals.map((person) => (

                <tr
                  key={person.id}
                  className="border-t border-neutral-100 hover:bg-neutral-50"
                >

                  <td className="p-6">

                    <Link
                      href={`/dashboard/referrals/${person.id}`}
                      className="font-medium"
                    >
                      {person.name}
                    </Link>

                  </td>

                  <td>{person.country}</td>

                  <td>{person.joined}</td>

                  <td>{person.lastActive}</td>

                  <td>

                    <span
                      className={`rounded-full px-4 py-2 text-sm ${
                        person.status === "Verified"
                          ? "bg-black text-white"
                          : "bg-neutral-200"
                      }`}
                    >
                      {person.status}
                    </span>

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
