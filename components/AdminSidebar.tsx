"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Megaphone,
  Send,
  Gift,
  BarChart3,
  Globe2,
  Settings,
  LogOut,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Announcements",
    href: "/admin/announcements",
    icon: Megaphone,
  },
  {
    title: "Broadcast",
    href: "/admin/broadcast",
    icon: Send,
  },
  {
    title: "Referrals",
    href: "/admin/referrals",
    icon: Gift,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Countries",
    href: "/admin/countries",
    icon: Globe2,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-72 border-r border-neutral-200 bg-white">

      <div className="border-b p-8">

        <img
          src="/logo.svg"
          alt="Take Profit"
          className="h-14 w-14"
        />

        <h2 className="mt-5 text-2xl font-semibold">
          Take Profit
        </h2>

        <p className="text-neutral-500">
          Admin Portal
        </p>

      </div>

      <nav className="p-6">

        {links.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-2 flex items-center gap-4 rounded-2xl px-5 py-4 transition ${
                active
                  ? "bg-black text-white"
                  : "text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}

      </nav>

      <div className="absolute bottom-8 left-6 right-6">

        <button className="flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-4 text-white">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}
