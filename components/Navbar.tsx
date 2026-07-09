export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Take Profit"
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold tracking-tight">
            Take Profit
          </span>
        </div>

        <button className="rounded-full bg-black text-white px-5 py-2 text-sm font-medium hover:opacity-90 transition">
          Join Waitlist
        </button>
      </div>
    </header>
  );
}