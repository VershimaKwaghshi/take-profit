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
            priority
          />

          <span className="text-2xl font-semibold tracking-tight text-black">
            Take Profit
          </span>

        </Link>

        <div className="relative flex items-center gap-4">

          <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm transition hover:shadow-md">

            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-600" />

          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 rounded-full bg-white px-2 py-2 shadow-sm transition hover:shadow-md"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071A52] font-semibold text-white">

              {initial}

            </div>

            <div className="hidden text-left md:block">

              <p className="text-sm font-semibold text-black">

                {user?.first_name}

              </p>

              <p className="text-xs text-neutral-500">

                Founding Member

              </p>

            </div>

            <ChevronDown
              size={18}
              className={`transition ${
                menuOpen ? "rotate-180" : ""
              }`}
            />

          </button>

          {menuOpen && (

            <div className="absolute right-0 top-16 z-50 w-80 overflow-hidden rounded-[28px] bg-white shadow-2xl">

              <div className="bg-[#071A52] px-8 py-8 text-white">

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-semibold text-[#071A52]">

                    {initial}

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">

                      {user?.first_name} {user?.last_name}

                    </h3>

                    <p className="mt-1 text-sm text-blue-100">

                      {user?.email}

                    </p>

                  </div>

                </div>

              </div>

              <div className="py-3">

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/dashboard/profile");
                  }}
                  className="block w-full px-8 py-4 text-left transition hover:bg-neutral-100"
                >
                  Profile
                </button>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/dashboard/referrals");
                  }}
                  className="block w-full px-8 py-4 text-left transition hover:bg-neutral-100"
                >
                  Referrals
                </button>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/dashboard/settings");
                  }}
                  className="block w-full px-8 py-4 text-left transition hover:bg-neutral-100"
                >
                  Settings
                </button>

                {user?.is_admin && (

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/admin");
                    }}
                    className="mx-4 mt-3 block w-[calc(100%-2rem)] rounded-2xl bg-black px-6 py-4 text-center font-medium text-white transition hover:bg-neutral-900"
                  >
                    Admin Portal
                  </button>

                )}

              </div>

              <div className="border-t border-neutral-200 p-4">

                <button
                  onClick={() => router.push("/login")}
                  className="w-full rounded-2xl bg-red-600 py-4 font-medium text-white transition hover:bg-red-700"
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