import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ReferralLinkCard from "@/components/ReferralLinkCard";
import { Lock } from "lucide-react";

export default function DashboardPage() {
  // Replace with database values later
  const verifiedReferrals = 0;

  const unlocked = verifiedReferrals >= 1;

  const features = [
    "Trading",
    "Funding",
    "Restitution",
    "Analytics",
    "Academy",
    "Marketplace",
    "Community",
    "AI Assistant",
  ];

  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-10">

          <Topbar />

          {/* Unlock Status */}

          <div className="mt-10 rounded-[32px] border border-neutral-200 bg-white p-10 shadow-sm">

            <p className="text-sm font-medium text-neutral-500">
              PLATFORM STATUS
            </p>

            <h1 className="mt-3 text-4xl font-semibold">
              {unlocked ? "🟢 Platform Unlocked" : "🔒 Platform Locked"}
            </h1>

            <p className="mt-5 max-w-2xl text-neutral-500 leading-8">
              {unlocked
                ? "Congratulations! Your Take Profit account has been unlocked. Future features will automatically become available as they launch."
                : "Invite one verified friend to unlock the Take Profit ecosystem. Your referral tools are available below."}
            </p>

            <div className="mt-10">

              <div className="flex justify-between text-sm font-medium">

                <span>Progress</span>

                <span>
                  {Math.min(verifiedReferrals, 1)} / 1 Verified Referral
                </span>

              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-neutral-200">

                <div
                  className={`h-full rounded-full bg-black transition-all duration-700 ${
                    unlocked ? "w-full" : "w-0"
                  }`}
                />

              </div>

            </div>

          </div>

          {/* Referral */}

          <div className="mt-10">

            <ReferralLinkCard />

          </div>

          {/* Locked Features */}

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {features.map((feature) => (

              <div
                key={feature}
                className="rounded-[32px] border border-neutral-200 bg-white p-10 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-semibold">
                    {feature}
                  </h2>

                  {!unlocked && (
                    <Lock
                      size={22}
                      className="text-neutral-400"
                    />
                  )}

                </div>

                <p className="mt-5 leading-7 text-neutral-500">

                  {unlocked
                    ? "Coming Soon"
                    : "Unlock with one verified referral."}

                </p>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}
