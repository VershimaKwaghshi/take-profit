import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-20 lg:grid-cols-[1.6fr_1fr]">

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/logo.svg"
                alt="Take Profit"
                width={46}
                height={46}
              />

              <span className="text-3xl font-semibold text-white">

                Take Profit

              </span>

            </div>

            <h2 className="mt-10 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-6xl">

              Recover.

              <br />

              Improve.

              <br />

              Continue building wealth.

            </h2>

            <p className="mt-10 max-w-2xl text-xl leading-10 text-neutral-400">

              Capital.

              <br />

              Risk Management.

              <br />

              Growth.

            </p>

          </div>

          <div className="grid gap-12 sm:grid-cols-2">

            <div>

              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-500">

                PLATFORM

              </p>

              <div className="space-y-5">

                <Link
                  href="/waitlist"
                  className="block text-lg text-white transition hover:text-red-500"
                >

                  Join Waitlist

                </Link>

                <Link
                  href="/login"
                  className="block text-lg text-white transition hover:text-red-500"
                >

                  Log In

                </Link>

              </div>

            </div>

            <div>

              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-500">

                COMPANY

              </p>

              <div className="space-y-5">

                <Link
                  href="/privacy"
                  className="block text-lg text-white transition hover:text-red-500"
                >

                  Privacy Policy

                </Link>

                <Link
                  href="/terms"
                  className="block text-lg text-white transition hover:text-red-500"
                >

                  Terms of Use

                </Link>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-10 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">

          <p>

            © 2026 Take Profit

          </p>

          <p>

            Built by PLeNat Technologies

          </p>

        </div>

      </div>

    </footer>
  );
}