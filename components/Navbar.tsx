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
            className="h-8 w-8"
          />

          <span className="text-xl font-semibold tracking-tight text-black">
            Take Profit
          </span>
        </a>

        <nav className="flex items-center gap-8">

          <a
            href="/"
            className="font-medium text-neutral-600 transition hover:text-black"
          >
            Home
          </a>

          <a
            href="/login"
            className="font-medium text-neutral-600 transition hover:text-black"
          >
            Log In
          </a>

          <a
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Join Waitlist
          </a>

        </nav>

      </div>

    </header>
  );
}