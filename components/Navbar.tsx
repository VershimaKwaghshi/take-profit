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

        <div className="flex items-center gap-4">

          <a
            href="/login"
            className="rounded-full border border-neutral-300 px-6 py-3 font-semibold text-black transition hover:bg-neutral-100"
          >

            Log In

          </a>

          <a
            href="#waitlist"
            className="rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >

            Join Waitlist

          </a>

        </div>

      </div>

    </header>
  );
}