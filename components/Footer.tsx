export default function Footer() {
  return (
    <footer className="bg-black">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-20 lg:grid-cols-[1.6fr_1fr]">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
              TAKE PROFIT
            </p>

            <h2 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">
              Recover.
              <br />
              Improve.
              <br />
              Continue.
            </h2>

            <p className="mt-10 max-w-2xl text-xl leading-10 text-neutral-400">
              Capital.
              <br />
              Risk Management.
              <br />
              Growth.
            </p>

          </div>

          <div className="grid gap-14 sm:grid-cols-2">

            <div>

              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
                PLATFORM
              </p>

              <div className="space-y-5">

                <a
                  href="/waitlist"
                  className="block text-lg text-white transition hover:text-red-500"
                >
                  Join Waitlist
                </a>

                <a
                  href="/login"
                  className="block text-lg text-white transition hover:text-red-500"
                >
                  Log In
                </a>

              </div>

            </div>

            <div>

              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
                COMPANY
              </p>

              <div className="space-y-5">

                <a
                  href="/privacy"
                  className="block text-lg text-white transition hover:text-red-500"
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms"
                  className="block text-lg text-white transition hover:text-red-500"
                >
                  Terms of Use
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-24 border-t border-neutral-900 pt-8">

          <div className="flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 Take Profit. All rights reserved.
            </p>

            <p>
              PLeNat Technologies
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}