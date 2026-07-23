export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src="/logo.svg"
            alt="Take Profit"
            className="w-8 h-8"
          />

          <span className="text-black text-xl font-semibold tracking-tight">
            Take Profit
          </span>
        </a>

        <div className="flex items-center gap-6">

          <a
            href="/login"
            className="text-neutral-600 font-medium hover:text-black transition"
          >
            Log In
          </a>

          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-semibold transition hover:opacity-90"
          >
            Join Waitlist
          </a>

        </div>

      </div>

    </header>
  );
}