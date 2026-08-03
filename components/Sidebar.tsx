"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@/app/dashboard/UserProvider";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Referrals",
    href: "/dashboard/referrals",
  },
  {
    name: "Academy",
    href: "/dashboard/education",
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
];

const adminLinks = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Users",
    href: "/admin/users",
  },
  {
    name: "Referrals",
    href: "/admin/referrals",
  },
  {
    name: "Broadcast",
    href: "/admin/broadcast",
  },
  {
    name: "Announcements",
    href: "/admin/announcements",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
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
    <aside className="hidden h-screen w-72 shrink-0 flex-col bg-[#071A52] text-white lg:flex">
      <div className="border-b border-white/10 px-8 py-8">
        <Link href="/dashboard" className="flex items-center gap-4">
          <Image src="/logo.svg" alt="Take Profit" width={40} height={40} />
          <div>
            <h2 className="text-2xl font-semibold">Take Profit</h2>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-blue-200">
              Academy
            </p>
          </div>
        </Link>
      </div>

      <div className="px-8 pt-10">
        <div className="rounded-3xl bg-white/10 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-200">
            PRE-LAUNCH
          </p>
          <h3 className="mt-4 text-2xl font-semibold">Founding Member</h3>
          <p className="mt-4 text-sm leading-7 text-blue-100">
            Learn how Take Profit works before launch and follow our progress
            from inside your dashboard.
          </p>
        </div>
      </div>

      <div className="mt-12 px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
          Navigation
        </p>
        <nav className="space-y-3">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-2xl px-5 py-4 font-medium transition-all duration-200 ${
                  active
                    ? "bg-red-600 text-white shadow-lg"
                    : "text-blue-100 hover:bg-white/10"
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
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
            Administration
          </p>
          <nav className="space-y-3">
            {adminLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-2xl px-5 py-4 font-medium transition-all duration-200 ${
                    active
                      ? "bg-red-600 text-white"
                      : "text-blue-100 hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      <div className="mt-auto border-t border-white/10 p-8">
        <button
          onClick={handleSignOut}
          disabled={loggingOut}
          className="w-full rounded-2xl bg-white py-4 font-semibold text-black transition hover:bg-neutral-200 disabled:opacity-50"
        >
          {loggingOut ? "Signing Out..." : "Sign Out"}
        </button>
      </div>
    </aside>
  );
}
