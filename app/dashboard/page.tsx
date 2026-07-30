"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ReferralLinkCard from "@/components/ReferralLinkCard";
import AnnouncementCard from "./AnnouncementCard";
import { useUser } from "./UserProvider";

export default function DashboardPage() {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f7ff]">
        <p className="text-lg text-neutral-600">
          Loading dashboard...
        </p>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg,#eef5ff 0%,#ffffff 35%,#fff4f4 100%)",
      }}
    >
      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-6 md:p-10">

          <Topbar />

          <div className="mt-10 overflow-hidden rounded-[40px] bg-[#071A52] shadow-2xl">

            <div className="p-10 md:p-14">

              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-blue-200">
                Founding Member
              </p>

              <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
                Welcome {user?.first_name}
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-10 text-blue-100">
                You joined Take Profit before launch.
                This dashboard is where you will receive every lesson,
                announcement and platform update as we prepare for launch.
              </p>

            </div>

          </div>

          <div className="mt-10 rounded-[36px] bg-white p-8 shadow-xl">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Referral Progress
            </p>

            <p className="mt-4 text-4xl font-bold text-black">
              {user?.referral_count ?? 0} Verified Referral
              {(user?.referral_count ?? 0) === 1 ? "" : "s"}
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Invite people using your referral link.
              Every verified referral brings you closer to unlocking future
              platform benefits.
            </p>

            <div className="mt-8">
              <ReferralLinkCard />
            </div>

          </div>

          <div className="mt-10">
            <AnnouncementCard />
          </div>

        </section>

      </div>
    </main>
  );
}