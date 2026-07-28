import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-20 lg:grid-cols-[1.7fr_1fr]">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">

              TAKE PROFIT

            </p>

            <h2 className="mt-10 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">

              Access capital.

              <br />

              Manage risk.

              <br />

              Keep trading.

            </h2>

            <div className="mt-12 flex flex-wrap gap-4">

              <div className="rounded-full border border-white/10 px-5 py-3 text-white">

                Capital

              </div>

              <div className="rounded-full border border-white/10 px-5 py-3 text-white">

                Education

              </div>

              <div className="rounded-full border border-white/10 px-5 py-3 text-white">

                Performance Tracking

              </div>

              <div className="rounded-full border border-white/10 px-5 py-3 text-white">

                Risk Management

              </div>

              <div className="rounded-full border border-white/10 px-5 py-3 text-white">

                Trader Growth

              </div>

            </div>

          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-1">

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

        <div className="mt-24 border-t border-white/10 pt-10">

          <div className="flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">

            <p>

              © 2026 Take Profit

            </p>

            <p>

              Built by PLeNat Technologies

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}