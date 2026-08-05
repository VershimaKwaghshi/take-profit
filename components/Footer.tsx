export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-paper">Take Profit</h3>
            <p className="mt-6 max-w-sm leading-8 text-paper/50">
              Building a different trading experience.
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-paper/40">
              Platform
            </p>
            <div className="space-y-4">
              <a href="/waitlist" className="block text-paper/80 transition hover:text-oxblood">
                Join waitlist
              </a>
              <a href="/login" className="block text-paper/80 transition hover:text-oxblood">
                Log in
              </a>
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-paper/40">
              Legal
            </p>
            <div className="space-y-4">
              <a href="/privacy" className="block text-paper/80 transition hover:text-oxblood">
                Privacy policy
              </a>
              <a href="/terms" className="block text-paper/80 transition hover:text-oxblood">
                Terms of use
              </a>
              <a href="mailto:support@takeprofit.name.ng" className="block text-paper/80 transition hover:text-oxblood">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-paper/40 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Take Profit. All rights reserved.</p>
            <p>PLeNat Technologies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}