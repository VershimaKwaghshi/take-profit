"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.svg"
              alt="Take Profit"
              width={38}
              height={38}
            />

            <span className="text-3xl font-semibold">
              Take Profit
            </span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100"
          >
            <Menu size={24} />
          </button>

        </div>

      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/40">

          <div className="absolute right-0 top-0 flex h-full w-[320px] flex-col bg-white p-8">

            <div className="mb-10 flex items-center justify-between">

              <span className="text-2xl font-semibold">
                Menu
              </span>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 hover:bg-neutral-100"
              >
                <X size={26} />
              </button>

            </div>

            <nav className="flex flex-col gap-8 text-2xl font-medium">

              <Link
                href="/"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/login"
                onClick={() => setOpen(false)}
              >
                Log In
              </Link>

            </nav>

            <div className="mt-auto">

              <Link
                href="/waitlist"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-black px-8 py-5 text-lg font-semibold text-white transition hover:bg-neutral-900"
              >
                Join Waitlist
              </Link>

            </div>

          </div>

        </div>
      )}
    </>
  );
}