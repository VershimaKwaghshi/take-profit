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
  const [loggingOut, setLoggingOut] = useState(false);

  const initial = user?.first_name?.charAt(0).toUpperCase() ?? "?";

  async function handleSignOut() {
    setLoggingOut(true);
    try {
      await fetch("/api/logout", { method: "POST" });
    } catch {
      // Proceed to login even if network fails
    } finally {
      router.push("/login");
      router.refresh();
    }
  }

  return (
    <header className="mb-10">
      <div className="flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-3 lg:hidden">
          <Image src="/logo.svg" alt="Take Profit" width={32} height={32} priority />
          <span className="text-xl font-semibold tracking-tight text-chalk">
            Take Profit
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-panel-line bg-panel transition hover:border-fog">
            <Bell size={18} className="text-chalk" />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-ember" />
          </button>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 rounded-full border border-panel-line bg-panel px-2 py-2 transition hover:border-fog"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ember font-semibold text-chalk">
                {initial}
              </div>

              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-chalk">
                  {user?.first_name}
                </p>
                <p className="font-mono text-xs uppercase tracking-wide text-fog">
                  Founding Member
                </p>
              </div>

              <ChevronDown
                size={18}
                className={`text-fog transition ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-16 z-50 w-80 overflow-hidden rounded-lg border border-panel-line bg-panel">
                <div className="border-b border-panel-line px-8 py-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ember text-xl font-semibold text-chalk">
                      {initial}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-chalk">
                        {user?.first_name} {user?.last_name}
                      </h3>
                      <p className="mt-1 break-all text-sm text-fog">
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
                    className="block w-full px-8 py-4 text-left text-chalk transition hover:bg-deck/60"
                  >
                    Profile
                  </button>

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/dashboard/referrals");
                    }}
                    className="block w-full px-8 py-4 text-left text-chalk transition hover:bg-deck/60"
                  >
                    Referrals
                  </button>

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/dashboard/settings");
                    }}
                    className="block w-full px-8 py-4 text-left text-chalk transition hover:bg-deck/60"
                  >
                    Settings
                  </button>

                  {user?.is_admin && (
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        router.push("/admin");
                      }}
                      className="mx-4 mt-3 block w-[calc(100%-2rem)] rounded-md bg-chalk px-6 py-4 text-center font-medium text-deck transition hover:bg-fog"
                    >
                      Admin portal
                    </button>
                  )}
                </div>

                <div className="border-t border-panel-line p-4">
                  <button
                    onClick={handleSignOut}
                    disabled={loggingOut}
                    className="w-full rounded-md bg-ember py-4 font-medium text-chalk transition hover:bg-oxblood-dark disabled:opacity-50"
                  >
                    {loggingOut ? "Signing out..." : "Sign out"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}