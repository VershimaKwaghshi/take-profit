import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ReferralLinkCard from "@/components/ReferralLinkCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-10">

          <Topbar />

          <div className="mt-10">

            <ReferralLinkCard />

          </div>

          <div className="grid gap-6 mt-10 md:grid-cols-2">

            <div className="rounded-[32px] bg-white border border-neutral-200 p-10 shadow-sm">

              <h2 className="text-2xl font-semibold">
                Trading
              </h2>

              <p className="mt-4 text-neutral-500">
                Coming Soon
              </p>

            </div>

            <div className="rounded-[32px] bg-white border border-neutral-200 p-10 shadow-sm">

              <h2 className="text-2xl font-semibold">
                Funding
              </h2>

              <p className="mt-4 text-neutral-500">
                Coming Soon
              </p>

            </div>

            <div className="rounded-[32px] bg-white border border-neutral-200 p-10 shadow-sm">

              <h2 className="text-2xl font-semibold">
                Restitution
              </h2>

              <p className="mt-4 text-neutral-500">
                Coming Soon
              </p>

            </div>

            <div className="rounded-[32px] bg-white border border-neutral-200 p-10 shadow-sm">

              <h2 className="text-2xl font-semibold">
                Analytics
              </h2>

              <p className="mt-4 text-neutral-500">
                Coming Soon
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
