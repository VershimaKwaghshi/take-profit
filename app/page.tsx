// app/page.tsx
import Link from "next/link";
import { ShieldCheck, TrendingUp, Target } from "lucide-react";

type Props = {
  searchParams: Promise<{ ref?: string }>;
};

const LEDGER_ENTRIES = [
  "TP-84219 · 45d inactive · 1.50x",
  "MGR-ALIAS-07 · EU-WEST · 50/50",
  "TP-83764 · 51d inactive · 1.25x",
  "MGR-ALIAS-19 · NA-EAST · 50/50",
  "CB-PLAN-1102 · day 34 of 100",
  "TP-82901 · 65d inactive · 2.00x",
  "MGR-ALIAS-03 · APAC · 50/50",
  "RESTITUTION-QUEUE · position 4",
];

export default async function Home({ searchParams }: Props) {
  const { ref } = await searchParams;
  const registerHref = ref
    ? `/register?ref=${encodeURIComponent(ref)}`
    : "/register";

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-navy">
            <path d="M4 20L14 6L24 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="4" cy="20" r="2.5" fill="currentColor" />
            <circle cx="24" cy="20" r="2.5" fill="currentColor" />
            <circle cx="14" cy="6" r="1.5" fill="currentColor" />
          </svg>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide">TAKE PROFIT</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-ash">Capital &amp; Manager Marketplace</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-ash font-medium">
          <a href="#programs" className="hover:text-navy transition-colors">Programs</a>
          <a href="#performance" className="hover:text-navy transition-colors">Performance</a>
          <a href="#faq" className="hover:text-navy transition-colors">FAQ</a>
        </nav>
        <Link
          href={registerHref}
          className="bg-navy text-paper hover:bg-navy-dark text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          Register
        </Link>
      </header>

      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-navy font-semibold mb-5">
            Precision. Protection. Performance.
          </p>
          <h1 className="font-headline text-4xl md:text-5xl font-semibold leading-[1.1] mb-6">
            A ledger for how capital and management actually get shared.
          </h1>
          <p className="text-ash text-base md:text-lg max-w-md mb-8 leading-relaxed">
            Take Profit pairs retail traders with professional managers under a transparent
            50/50 split, backed by an automated restitution reserve if a manager breaches risk.
          </p>
          <div className="flex flex-col items-start gap-3">
            <Link
              href={registerHref}
              className="bg-navy text-paper hover:bg-navy-dark font-medium px-7 py-3.5 rounded-full transition-colors"
            >
              Register now
            </Link>
            <span className="text-xs text-ash tracking-wide">No referral code required</span>
          </div>
        </div>

        <div className="relative">
          <div className="bg-panel border border-line rounded-2xl shadow-[0_20px_60px_-25px_rgba(16,21,31,0.25)] p-7 rotate-[1.2deg]">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ash mb-1">Account balance</p>
            <p className="font-data text-3xl font-medium mb-6">$48,210.00</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ash mb-1">Manager</p>
                <p className="font-data text-sm">MGR-ALIAS-07</p>
                <p className="text-[10px] text-ash mt-0.5">EU-WEST</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ash mb-1">Split</p>
                <p className="font-data text-sm">50 / 50</p>
                <p className="text-[10px] text-ash mt-0.5">Even, no exceptions</p>
              </div>
            </div>
            <div className="h-2 rounded-full bg-mist overflow-hidden flex">
              <div className="bg-navy h-full" style={{ width: "50%" }} />
              <div className="bg-line h-full" style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </section>

      <div className="ledger-strip">
        <div className="ledger-strip__track">
          {[...LEDGER_ENTRIES, ...LEDGER_ENTRIES].map((entry, i) => (
            <span key={i} className="ledger-strip__item">{entry}</span>
          ))}
        </div>
      </div>

      <section id="programs" className="px-6 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
        <div className="bg-paper p-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-navy font-semibold mb-4">Protection</p>
          <div className="h-11 w-11 rounded-lg bg-mist border border-line flex items-center justify-center mb-5 text-navy">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="font-headline text-lg font-semibold mb-3">Restitution reserve</h3>
          <p className="text-ash text-sm leading-relaxed">
            A manager is locked out automatically at 50% drawdown. Restoration is funded
            from a reserve and queued first come, first served.
          </p>
        </div>

        <div className="bg-paper p-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-navy font-semibold mb-4">Growth</p>
          <div className="h-11 w-11 rounded-lg bg-mist border border-line flex items-center justify-center mb-5 text-navy">
            <TrendingUp className="h-5 w-5" />
          </div>
          <h3 className="font-headline text-lg font-semibold mb-3">Capital building</h3>
          <p className="text-ash text-sm leading-relaxed">
            A 100 day path to full funding. Daily scheduled payments at 1.1% of the
            requested size, funding opens day 11 through day 100.
          </p>
        </div>

        <div className="bg-paper p-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-navy font-semibold mb-4">Execution</p>
          <div className="h-11 w-11 rounded-lg bg-mist border border-line flex items-center justify-center mb-5 text-navy">
            <Target className="h-5 w-5" />
          </div>
          <h3 className="font-headline text-lg font-semibold mb-3">Managed trading</h3>
          <p className="text-ash text-sm leading-relaxed">
            24 hour rotating regional manager pools, aliased identities, and an even
            profit split you can see on every statement.
          </p>
        </div>
      </section>

      <footer className="border-t border-line py-10 px-6 text-center text-xs text-ash tracking-wide">
        © {new Date().getFullYear()} PLeNat Technologies. Partner broker custody model.
      </footer>
    </main>
  );
}
