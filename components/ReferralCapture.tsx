"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function ReferralCaptureInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref =
      searchParams.get("ref") ||
      searchParams.get("referred_by") ||
      searchParams.get("referral") ||
      searchParams.get("referral_code");

    if (ref) {
      localStorage.setItem("takeprofit_referral", ref);
    }
  }, [searchParams]);

  return null;
}

export default function ReferralCapture() {
  return (
    <Suspense fallback={null}>
      <ReferralCaptureInner />
    </Suspense>
  );
}
