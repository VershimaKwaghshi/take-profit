"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

            <div className="flex flex-col">
              <span className="text-2xl font-semibold tracking-tight text-black">
                Take Profit
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-red-600">
                Early Access
              </span>
            </div>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 transition hover:bg-neutral-100"
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

                <div className="flex flex-col">
                  <span className="text-2xl font-semibold">
                    Take Profit
                  </span>

                  <span className="text-xs uppercase tracking-[0.3em] text-red-600">
                    Early Access
                  </span>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-neutral-100"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-3xl font-semibold tracking-tight transition hover:text-red-600"
              >
                Home
              </Link>

              <Link
                href="/#features"
                onClick={() => setOpen(false)}
                className="text-3xl font-semibold tracking-tight transition hover:text-red-600"
              >
                How It Works
              </Link>

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-3xl font-semibold tracking-tight transition hover:text-red-600"
              >
                Log In
              </Link>
            </nav>

            <div className="mt-12 rounded-3xl bg-neutral-100 p-6">
              <h3 className="text-xl font-semibold text-black">
                Join before launch
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                Learn how Take Profit works, follow our progress, and be among
                the first to receive access when we launch.
              </p>
            </div>

            <div className="mt-auto">
              <Link
                href="/waitlist"
                onClick={() => setOpen(false)}
                className="flex h-16 w-full items-center justify-center rounded-full bg-black text-lg font-semibold text-white transition hover:bg-neutral-900"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="h-24" />
    </>
  );
}