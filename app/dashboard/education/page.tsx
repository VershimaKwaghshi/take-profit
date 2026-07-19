import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-10">

          <Topbar />

          <div className="mt-10 rounded-[36px] border border-neutral-200 bg-white p-16 shadow-sm">

            <div className="max-w-2xl">

              <h1 className="text-4xl font-semibold">
                Education
              </h1>

              <p className="mt-4 text-lg text-neutral-500">
                Coming Soon
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
