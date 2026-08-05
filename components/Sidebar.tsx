"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@/app/dashboard/UserProvider";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Referrals", href: "/dashboard/referrals" },
  { name: "Academy", href: "/dashboard/education" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Settings", href: "/dashboard/settings" },
];

const adminLinks = [
  { name: "Dashboard", href: "/admin" },
  { name: "Users", href: "/admin/users" },
  { name: "Referrals", href: "/admin/referrals" },
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
          <Image src="/logo.svg" alt="Take Profit" width={40} height={40} />
          <div>
            <h2 className="text-2xl font-semibold">Take Profit</h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-fog">
              Academy
            </p>
          </div>
        </Link>
      </div>

      <div className="px-8 pt-10">
        <div className="rounded-md border border-panel-line bg-deck/50 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
            Pre-launch
          </p>
          <h3 className="mt-4 text-xl font-semibold text-chalk">
            Founding Member
          </h3>
          <p className="mt-4 text-sm leading-7 text-fog">
            Learn how Take Profit works before launch and follow our progress
            from inside your dashboard.
          </p>
        </div>
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
                    ? "bg-ember text-chalk"
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
                      ? "bg-ember text-chalk"
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