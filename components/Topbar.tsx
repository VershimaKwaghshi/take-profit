"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, ChevronDown } from "lucide-react";
import { useUser } from "@/app/dashboard/UserProvider";

export default function Topbar() {
  const { user } = useUser();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const initial =
    user?.first_name?.charAt(0).toUpperCase() ?? "?";

  return (
    <header className="mb-12">

      <div className="flex items-center justify-between">

        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >

          <Image
            src="/logo.svg"
            alt="Take Profit"
            width={30}
            height={30}
          />

          <span className="text-2xl font-semibold tracking-tight">
            Take Profit
          </span>

        </Link>

        <div className="relative flex items-center gap-4">

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-neutral-100">

            <Bell size={18} />

          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-2 py-2 transition hover:bg-neutral-100"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">

              {initial}

            </div>

            <ChevronDown
              size={18}
              className={`transition ${
                menuOpen ? "rotate-180" : ""
              }`}
            />

          </button>

          {menuOpen && (

            <div className="absolute right-0 top-16 z-50 w-80 overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-2xl">

              <div className="border-b border-neutral-100 p-7">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">

                    {initial}

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold">

                      {user?.first_name} {user?.last_name}

                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">

                      {user?.email}

                    </p>

                  </div>

                </div>

              </div>

              <div className="py-3">

                <Link
                  href="/dashboard/profile"
                  className="block px-7 py-4 text-neutral-700 transition hover:bg-neutral-50"
                >
                  Profile
                </Link>

                <Link
                  href="/dashboard/referrals"
                  className="block px-7 py-4 text-neutral-700 transition hover:bg-neutral-50"
                >
                  Referrals
                </Link>

                <Link
                  href="/dashboard/notifications"
                  className="block px-7 py-4 text-neutral-700 transition hover:bg-neutral-50"
                >
                  Notifications
                </Link>

                <Link
                  href="/dashboard/settings"
                  className="block px-7 py-4 text-neutral-700 transition hover:bg-neutral-50"
                >
                  Settings
                </Link>

                <Link
                  href="/dashboard/help"
                  className="block px-7 py-4 text-neutral-700 transition hover:bg-neutral-50"
                >
                  Help & Contact
                </Link>

                {user?.is_admin && (

                  <Link
                    href="/admin"
                    className="mx-4 mt-3 block rounded-2xl bg-black px-6 py-4 text-center font-medium text-white transition hover:bg-neutral-900"
                  >
                    Admin Portal
                  </Link>

                )}

              </div>

              <div className="border-t border-neutral-100 p-3">

                <button
                  onClick={() => router.push("/login")}
                  className="w-full rounded-2xl px-5 py-4 text-left text-red-600 transition hover:bg-red-50"
                >
                  Sign Out
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}