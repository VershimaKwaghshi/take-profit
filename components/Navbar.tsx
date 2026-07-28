"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-6 z-50 px-6">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-full border border-black/5 bg-white/85 px-8 shadow-xl backdrop-blur-xl">

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <Image
            src="/logo.svg"
            alt="Take Profit"
            width={42}
            height={42}
            priority
          />

          <span className="text-xl font-bold tracking-tight text-black">

            Take Profit

          </span>

        </Link>

        <nav className="hidden items-center gap-10 lg:flex">

          <a
            href="#features"
            className="text-[15px] font-medium text-neutral-600 transition hover:text-black"
          >
            Features
          </a>

          <Link
            href="/login"
            className="text-[15px] font-medium text-neutral-600 transition hover:text-black"
          >
            Log In
          </Link>

        </nav>

        <Link
          href="/waitlist"
          className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-sm font-semibold text-white transition hover:bg-neutral-900"
        >

          Join Waitlist

        </Link>

      </div>

    </header>
  );
}