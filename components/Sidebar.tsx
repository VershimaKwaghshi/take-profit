"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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
    name: "Education",
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
    name: "Admin Dashboard",
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

  return (
    <aside className="hidden lg:flex h-screen w-72 shrink-0 flex-col border-r border-neutral-200 bg-white px-8 py-10">

      <div className="flex items-center gap-4">

        <Image
          src="/logo.svg"
          alt="Take Profit"
          width={46}
          height={46}
        />

        <div>

          <h2 className="text-2xl font-semibold">
            Take Profit
          </h2>

          <p className="text-xs text-neutral-500">
            A PLeNat Technologies company.
          </p>

        </div>

      </div>

      <div className="mt-12">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Trading
        </p>

        <nav className="space-y-2">

          {links.map((link) => {

            const active = pathname === link.href;

            return (

              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-2xl px-5 py-4 text-[16px] transition ${
                  active
                    ? "bg-black text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-black"
                }`}
              >
                {link.name}
              </Link>

            );

          })}

        </nav>

      </div>

      <div className="mt-12">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
          Administration
        </p>

        <nav className="space-y-2">

          {adminLinks.map((link) => {

            const active = pathname === link.href;

            return (

              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-2xl px-5 py-4 text-[16px] transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-neutral-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {link.name}
              </Link>

            );

          })}

        </nav>

      </div>

      <div className="mt-auto">

        <button
          onClick={() => router.push("/login")}
          className="w-full rounded-2xl bg-red-600 py-4 text-white transition hover:bg-red-700"
        >
          Sign Out
        </button>

      </div>

    </aside>
  );
}