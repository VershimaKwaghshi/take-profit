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
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-full border border-black/5 bg-white/85 px-8 shadow-xl backdrop-blur-xl">

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo.svg"
              alt="Take Profit"
              width={40}
              height={40}
              priority
            />

            <span className="text-2xl font-semibold tracking-tight text-black">
              Take Profit
            </span>

          </Link>

          <div className="hidden items-center gap-8 lg:flex">

            <Link
              href="/login"
              className="text-sm font-medium text-neutral-700 transition hover:text-black"
            >
              Log In
            </Link>

            <Link
              href="/waitlist"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-900"
            >
              Join Waitlist
            </Link>

          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 lg:hidden"
          >
            <Menu size={22} />
          </button>

        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm">

          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white p-10 shadow-2xl">

            <div className="mb-12 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Image
                  src="/logo.svg"
                  alt="Take Profit"
                  width={36}
                  height={36}
                />

                <span className="text-2xl font-semibold">
                  Take Profit
                </span>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-neutral-100"
              >
                <X size={24} />
              </button>

            </div>

            <nav className="flex flex-col gap-8">

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-3xl font-semibold"
              >
                Log In
              </Link>

            </nav>

            <div className="mt-auto">

              <Link
                href="/waitlist"
                onClick={() => setOpen(false)}
                className="flex h-16 w-full items-center justify-center rounded-full bg-black text-lg font-semibold text-white"
              >
                Join Waitlist
              </Link>

            </div>

          </div>

        </div>
      )}

      <div className="h-24" />
    </>
  );
}