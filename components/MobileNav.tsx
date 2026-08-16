"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useUser } from "@/app/dashboard/UserProvider";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Restitution", href: "/dashboard/restitution" },
  { name: "Capital Building", href: "/dashboard/capital-building" },
  { name: "Social Bonds", href: "/dashboard/social-bonds" },
  { name: "Referral Marketplace", href: "/dashboard/referral-marketplace" },
  { name: "Learning", href: "/dashboard/learning" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const [open, setOpen] = useState(false);
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
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-panel-line bg-panel"
      >
        <Menu size={18} className="text-chalk" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="relative flex h-full w-72 flex-col bg-panel">
            <div className="flex items-center justify-between border-b border-panel-line px-6 py-6">
              <div>
                <p className="text-lg font-semibold text-chalk">Take Profit</p>
                <p className="text-xs uppercase tracking-[0.3em] text-fog">Restitution System</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-panel-line"
              >
                <X size={16} className="text-chalk" />
              </button>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto px-6 py-6">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-ember text-white"
                        : "text-fog hover:bg-deck/60 hover:text-chalk"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {user?.is_admin && (
                <Link
                  href="/admin"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm font-medium text-fog hover:bg-deck/60 hover:text-chalk"
                >
                  Admin portal
                </Link>
              )}
            </nav>

            <div className="border-t border-panel-line p-6">
              <button
                onClick={handleSignOut}
                disabled={loggingOut}
                className="w-full rounded-md bg-chalk py-3 text-sm font-semibold text-deck disabled:opacity-50"
              >
                {loggingOut ? "Signing out..." : "Sign out"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
