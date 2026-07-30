export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-3">

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Take Profit
            </h3>

            <p className="mt-6 max-w-sm leading-8 text-neutral-400">
              Building a different trading experience.
            </p>
          </div>

          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
              PLATFORM
            </p>

            <div className="space-y-4">

              <a
                href="/waitlist"
                className="block text-white transition hover:text-red-500"
              >
                Join Waitlist
              </a>

              <a
                href="/login"
                className="block text-white transition hover:text-red-500"
              >
                Log In
              </a>

            </div>

          </div>

          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
              LEGAL
            </p>

            <div className="space-y-4">

              <a
                href="/privacy"
                className="block text-white transition hover:text-red-500"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="block text-white transition hover:text-red-500"
              >
                Terms of Use
              </a>

              <a
                href="mailto:support@takeprofit.name.ng"
                className="block text-white transition hover:text-red-500"
              >
                Contact
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-neutral-900 pt-8">

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