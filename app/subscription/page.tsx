// app/subscription/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TPLogo from "@/components/TPLogo";

type Subscription = {
  status: string;
  amount: string;
  currentPeriodEnd: string | null;
} | null;

export default function SubscriptionPage() {
  const router = useRouter();
  const [subscription, setSubscription] = useState<Subscription>(null);
  const [loading, setLoading] = useState(true);
  const [activating, setActivating] = useState(false);

  async function load() {
    const res = await fetch("/api/subscription");
    if (res.ok) {
      const data = await res.json();
      setSubscription(data.subscription);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function activate() {
    setActivating(true);
    const res = await fetch("/api/subscription/activate", { method: "POST" });
    setActivating(false);
    if (res.ok) {
      router.push("/dashboard");
    }
  }

  const isActive =
    subscription?.status === "active" &&
    subscription.currentPeriodEnd &&
    new Date(subscription.currentPeriodEnd) > new Date();

  return (
    <div className="min-h-screen bg-mist flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 justify-center mb-8">
          <TPLogo size={36} />
          <div>
            <h1 className="text-sm font-bold tracking-wider uppercase leading-tight text-ink">Take Profit</h1>
            <p className="text-[10px] tracking-widest text-ash uppercase leading-tight">Restitution System</p>
          </div>
        </div>

        <div className="bg-white border border-line rounded-xl p-7 shadow-sm">
          {loading ? (
            <p className="text-sm text-ash font-medium">Loading...</p>
          ) : isActive ? (
            <>
              <h2 className="text-xl font-extrabold text-ink mb-2">Subscription active.</h2>
              <p className="text-sm text-ink/70 font-medium mb-6">
                Renews {new Date(subscription!.currentPeriodEnd!).toLocaleDateString()}.
              </p>
              <button
                onClick={() => router.push("/dashboard")}
                className="w-full bg-navy hover:bg-navy-dark text-white font-bold text-sm py-3 rounded-md"
              >
                Go to dashboard
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-extrabold text-ink mb-2">Access requires an active subscription.</h2>
              <p className="text-sm text-ink/70 font-medium mb-6">
                Take Profit is 4 dollars and 99 cents a month. Dashboard access is suspended without
                an active subscription, this applies to traders and managers alike.
              </p>
              <button
                onClick={activate}
                disabled={activating}
                className="w-full bg-navy hover:bg-navy-dark text-white font-bold text-sm py-3 rounded-md disabled:opacity-50"
              >
                {activating ? "Processing..." : "Activate subscription, $4.99"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
