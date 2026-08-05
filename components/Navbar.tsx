"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-6 z-50 px-6">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-full border border-line bg-paper/90 px-8 backdrop-blur-xl">

          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Take Profit" width={38} height={38} priority />
            <span className="text-xl font-semibold tracking-tight text-ink">
              Take Profit
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-ash transition hover:text-ink"
            >
              Log in
            </Link>

            <Link
              href="/waitlist"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-oxblood"
            >
              Join waitlist
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line lg:hidden"
          >
            <Menu size={20} className="text-ink" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-ink/30 backdrop-blur-sm">
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-paper p-10">
            <div className="mb-12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/logo.svg" alt="Take Profit" width={34} height={34} />
                <span className="text-xl font-semibold text-ink">Take Profit</span>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-mist"
              >
                <X size={22} className="text-ink" />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-ink"
              >
                Log in
              </Link>
            </nav>

            <div className="mt-auto">
              <Link
                href="/waitlist"
                onClick={() => setOpen(false)}
                className="flex h-16 w-full items-center justify-center rounded-full bg-ink text-lg font-semibold text-paper"
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="h-24" />
    </>
  );
}