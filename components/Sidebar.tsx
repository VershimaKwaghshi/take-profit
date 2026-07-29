"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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

  return (
    <aside className="hidden lg:flex h-screen w-72 shrink-0 flex-col border-r border-neutral-200 bg-white px-8 py-10">

      <Link
        href="/dashboard"
        className="flex items-center gap-4"
      >

        <Image
          src="/logo.svg"
          alt="Take Profit"
          width={36}
          height={36}
        />

        <span className="text-2xl font-semibold tracking-tight">
          Take Profit
        </span>

      </Link>

      <div className="mt-14">

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">

          Workspace

        </p>

        <nav className="space-y-2">

          {links.map((link) => {

            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-2xl px-5 py-4 text-[16px] transition-all duration-200 ${
                  active
                    ? "bg-black text-white shadow-lg"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );

          })}

        </nav>

      </div>

      {user?.is_admin && (

        <div className="mt-14">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">

            Administration

          </p>

          <nav className="space-y-2">

            {adminLinks.map((link) => {

              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-2xl px-5 py-4 text-[16px] transition-all duration-200 ${
                    active
                      ? "bg-black text-white shadow-lg"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );

            })}

          </nav>

        </div>

      )}

      <div className="mt-auto pt-10">

        <button
          onClick={() => router.push("/login")}
          className="w-full rounded-2xl border border-neutral-200 py-4 font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          Sign Out
        </button>

      </div>

    </aside>
  );
}