export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-red-500">

              TAKE PROFIT

            </p>

            <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-tight text-white">

              Stay in the market.
              <br />
              Keep growing.

            </h2>

            <p className="mt-8 max-w-lg text-lg leading-9 text-neutral-400">

              A proprietary trading platform helping disciplined
              traders access capital, learn continuously and stay
              in the market longer.

            </p>

          </div>

          <div className="grid gap-10 text-left sm:grid-cols-2">

            <div>

              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">

                Platform

              </p>

              <div className="space-y-4">

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

              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">

                Company

              </p>

              <div className="space-y-4">

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

        <div className="mt-20 border-t border-neutral-900 pt-8">

          <div className="flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">

            <p>

              © 2026 Take Profit. All rights reserved.

            </p>

            <p>

              Built by PLeNat Technologies.

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}