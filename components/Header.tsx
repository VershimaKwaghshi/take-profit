// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <img src="/logo.svg" alt="Take Profit" className="h-7 w-7" />
          <span>Take Profit</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <Link href="#restitution" className="hover:text-slate-900">Restitution</Link>
          <Link href="#capital" className="hover:text-slate-900">Capital Building</Link>
          <Link href="#social" className="hover:text-slate-900">Social Bond</Link>
          <Link href="#referral" className="hover:text-slate-900">Referral Marketplace</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-600 hover:text-slate-900">
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}