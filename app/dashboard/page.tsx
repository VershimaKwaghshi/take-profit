import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ReferralLinkCard from "@/components/ReferralLinkCard";

export default function DashboardPage() {
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

          <div className="mt-10">

            <ReferralLinkCard />

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {features.map((feature) => (

              <div
                key={feature}
                className="rounded-[32px] border border-neutral-200 bg-white p-10 shadow-sm"
              >

                <h2 className="text-2xl font-semibold">
                  {feature}
                </h2>

                <p className="mt-5 leading-7 text-neutral-500">

                  Coming Soon

                </p>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}
