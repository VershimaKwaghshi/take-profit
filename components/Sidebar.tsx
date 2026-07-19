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

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="hidden lg:flex h-screen w-72 shrink-0 flex-col border-r border-neutral-200 bg-white px-8 py-10">

      <div className="flex items-center gap-3">

        <Image
          src="/logo.svg"
          alt="Take Profit"
          width={40}
          height={40}
        />

        <span className="text-2xl font-semibold">
          Take Profit
        </span>

      </div>

      <nav className="mt-14 space-y-2">

        {links.map((link) => {

          const active =
            pathname === link.href;

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

      <div className="mt-auto">

        <button
          onClick={() => router.push("/login")}
          className="w-full rounded-2xl border border-neutral-300 py-4 transition hover:bg-neutral-100"
        >

          Sign Out

        </button>

      </div>

    </aside>
  );
}
