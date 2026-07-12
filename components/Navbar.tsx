export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

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

        <a
          href="#waitlist"
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-semibold transition hover:opacity-90"
        >
          Join Waitlist
        </a>

      </div>
    </header>
  );
}