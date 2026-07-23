"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, Menu } from "lucide-react";
import { useUser } from "@/app/dashboard/UserProvider";

export default function Topbar() {
  const { user } = useUser();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const initial =
    user?.first_name?.charAt(0).toUpperCase() ?? "?";

  return (
    <header className="mb-10">

      <div className="flex items-center justify-between">

        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >

          <Image
            src="/logo.svg"
            alt="Take Profit"
            width={36}
            height={36}
          />

          <span className="text-2xl font-semibold">
            Take Profit
          </span>

        </Link>

        <div className="flex items-center gap-4">

          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-neutral-100">

            <Bell size={20} />

          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-semibold text-white"
          >

            {initial}

          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-neutral-100"
          >

            <Menu size={22} />

          </button>

        </div>

      </div>

      {menuOpen && (

        <div className="absolute right-10 top-24 z-50 w-80 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">

          <div className="border-b border-neutral-200 p-6">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-semibold text-white">

                {initial}

              </div>

              <div>

                <h3 className="font-semibold">

                  {user?.first_name} {user?.last_name}

                </h3>

                <p className="text-sm text-neutral-500">

                  {user?.email}

                </p>

              </div>

            </div>

          </div>

          <div className="py-2">

            <Link
              href="/dashboard/profile"
              className="block px-6 py-4 hover:bg-neutral-100"
            >
              👤 Profile
            </Link>

            <Link
              href="/dashboard/referrals"
              className="block px-6 py-4 hover:bg-neutral-100"
            >
              👥 Referrals
            </Link>

            <Link
              href="/dashboard/notifications"
              className="block px-6 py-4 hover:bg-neutral-100"
            >
              🔔 Notifications
            </Link>

            <Link
              href="/dashboard/settings"
              className="block px-6 py-4 hover:bg-neutral-100"
            >
              ⚙️ Settings
            </Link>

            <Link
              href="/dashboard/help"
              className="block px-6 py-4 hover:bg-neutral-100"
            >
              💬 Help & Contact
            </Link>

          </div>

          <div className="border-t border-neutral-200 p-2">

            <button
              onClick={() => router.push("/login")}
              className="w-full rounded-2xl px-5 py-4 text-left text-red-600 transition hover:bg-red-50"
            >

              🚪 Sign Out

            </button>

          </div>

        </div>

      )}

    </header>
  );
}