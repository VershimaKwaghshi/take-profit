"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@/app/dashboard/UserProvider";
import TPLogo from "@/components/TPLogo";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Manager Selection", href: "/dashboard/managers" },
  { name: "Become a Manager", href: "/dashboard/managers/apply" },
  { name: "Restitution", href: "/dashboard/restitution" },
  { name: "Capital Building", href: "/dashboard/capital-building" },
  { name: "Social Bonds", href: "/dashboard/social-bonds" },
  { name: "Referral Marketplace", href: "/dashboard/referral-marketplace" },
  { name: "Referrals", href: "/dashboard/referrals" },
  { name: "Learning", href: "/dashboard/learning" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Settings", href: "/dashboard/settings" },
];

const adminLinks = [
  { name: "Dashboard", href: "/admin" },
  { name: "Users", href: "/admin/users" },
  { name: "Referrals", href: "/admin/referrals" },
  { name: "Restitution", href: "/admin/restitution" },
  { name: "Broadcast", href: "/admin/broadcast" },
  { name: "Announcements", href: "/admin/announcements" },
  { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const [loggingOut, setLoggingOut] = useState(false);

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
    <aside className="hidden h-screen w-72 shrink-0 flex-col border-r border-panel-line bg-panel text-chalk lg:flex">
      <div className="border-b border-panel-line px-8 py-8">
        <Link href="/dashboard" className="flex items-center gap-4">
          <TPLogo size={40} />

          <div>
            <h2 className="text-2xl font-semibold">
              Take Profit
            </h2>

            <p className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-fog">
              Restitution System
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-12 px-8">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-fog">
          Navigation
        </p>

        <nav className="space-y-2">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-5 py-4 font-medium transition-all duration-200 ${
                  active
                    ? "bg-ember text-white"
                    : "text-fog hover:bg-deck/60 hover:text-chalk"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {user?.is_admin && (
        <div className="mt-12 px-8">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-fog">
            Administration
          </p>

          <nav className="space-y-2">
            {adminLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-md px-5 py-4 font-medium transition-all duration-200 ${
                    active
                      ? "bg-ember text-white"
                      : "text-fog hover:bg-deck/60 hover:text-chalk"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      <div className="mt-auto border-t border-panel-line p-8">
        <button
          onClick={handleSignOut}
          disabled={loggingOut}
          className="w-full rounded-md bg-chalk py-4 font-semibold text-deck transition hover:bg-fog disabled:opacity-50"
        >
          {loggingOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </aside>
  );
}
