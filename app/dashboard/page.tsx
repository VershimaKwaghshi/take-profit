"use client";

import Link from "next/link";
import Image from "next/image";
import { Copy, Share2, QrCode, Search } from "lucide-react";

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
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        {/* Sidebar */}

        <aside className="hidden md:flex w-72 bg-white border-r border-neutral-200 flex-col p-8">

          <div className="flex items-center gap-3 mb-12">
            <Image
              src="/logo.svg"
              alt="Take Profit"
              width={36}
              height={36}
            />

            <span className="text-xl font-semibold">
              Take Profit
            </span>
          </div>

          <nav className="space-y-2">

            <Link
              href="/dashboard"
              className="block rounded-2xl bg-black text-white px-5 py-4"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/referrals"
              className="block rounded-2xl px-5 py-4 hover:bg-neutral-100"
            >
              Referrals
            </Link>

            <Link
              href="/dashboard/education"
              className="block rounded-2xl px-5 py-4 hover:bg-neutral-100"
            >
              Education
            </Link>

            <Link
              href="/dashboard/profile"
              className="block rounded-2xl px-5 py-4 hover:bg-neutral-100"
            >
              Profile
            </Link>

            <Link
              href="/dashboard/settings"
              className="block rounded-2xl px-5 py-4 hover:bg-neutral-100"
            >
              Settings
            </Link>

          </nav>

          <div className="mt-auto">

            <button className="w-full rounded-2xl border border-neutral-300 py-4">
              Sign Out
            </button>

          </div>

        </aside>

        {/* Main */}

        <section className="flex-1 p-10">

          <div className="max-w-7xl mx-auto">

            <div className="mb-10">

              <h1 className="text-4xl font-semibold">
                Welcome back
              </h1>

              <p className="text-neutral-500 mt-2">
                Manage your referrals from one place.
              </p>

            </div>

            {/* Referral Link */}

            <div className="rounded-3xl bg-white shadow-sm border border-neutral-200 p-8 mb-8">

              <p className="text-neutral-500 mb-3">
                Your Referral Link
              </p>

              <div className="text-lg font-medium break-all">
                https://takeprofit.name.ng/r/TPL9XK8Q2M
              </div>

              <div className="flex gap-3 mt-8">

                <button className="flex items-center gap-2 rounded-full bg-black text-white px-6 py-3">

                  <Copy size={18} />

                  Copy

                </button>

                <button className="flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3">

                  <Share2 size={18} />

                  Share

                </button>

                <button className="flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3">

                  <QrCode size={18} />

                  QR Code

                </button>

              </div>

            </div>

            {/* Summary */}

            <div className="grid gap-6 md:grid-cols-4 mb-10">

              {[
                ["Total Referrals", "12"],
                ["Verified", "8"],
                ["Pending", "4"],
                ["Countries", "3"],
              ].map(([title, value]) => (

                <div
                  key={title}
                  className="rounded-3xl bg-white border border-neutral-200 p-8 shadow-sm"
                >

                  <p className="text-neutral-500">
                    {title}
                  </p>

                  <h2 className="text-4xl font-semibold mt-3">
                    {value}
                  </h2>

                </div>

              ))}

            </div>

            {/* Referrals */}

            <div className="rounded-3xl bg-white border border-neutral-200 shadow-sm overflow-hidden">

              <div className="flex justify-between items-center p-8 border-b border-neutral-200">

                <h2 className="text-2xl font-semibold">
                  Recent Referrals
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
                      className="border-t border-neutral-100 hover:bg-neutral-50 cursor-pointer"
                    >

                      <td className="p-6 font-medium">
                        {person.name}
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

        </section>

      </div>

    </main>
  );
}