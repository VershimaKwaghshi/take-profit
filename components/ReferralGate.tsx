"use client";

import { useUser } from "@/app/dashboard/UserProvider";

export default function ReferralGate({
  children,
  featureName = "this feature",
}: {
  children: React.ReactNode;
  featureName?: string;
}) {
  const { user, loading } = useUser();

  if (loading) {
    return <p className="text-fog">Loading...</p>;
  }

  if (user?.has_referrer) {
    return <>{children}</>;
  }

  return (
    <div className="rounded-lg border border-panel-line bg-panel p-8 max-w-md">
      <p className="text-sm font-bold text-chalk">Referral required.</p>
      <p className="mt-3 text-sm text-fog font-medium leading-relaxed">
        You cannot access {featureName} without a referral. Take Profit operates on a network,
        every account connects through someone already active on the platform.
      </p>
    </div>
  );
}
