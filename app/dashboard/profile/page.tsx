import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-10">

          <Topbar />

          <div className="mt-10 rounded-[36px] border border-neutral-200 bg-white p-12 shadow-sm">

            <h1 className="text-4xl font-semibold">
              Profile
            </h1>

            <div className="mt-12 grid gap-8 md:grid-cols-2">

              <div>

                <p className="text-sm text-neutral-500">
                  Full Name
                </p>

                <p className="mt-2 text-xl font-medium">
                  John Doe
                </p>

              </div>

              <div>

                <p className="text-sm text-neutral-500">
                  Email
                </p>

                <p className="mt-2 text-xl font-medium">
                  john@example.com
                </p>

              </div>

              <div>

                <p className="text-sm text-neutral-500">
                  Country
                </p>

                <p className="mt-2 text-xl font-medium">
                  Nigeria
                </p>

              </div>

              <div>

                <p className="text-sm text-neutral-500">
                  Referral Code
                </p>

                <p className="mt-2 text-xl font-medium">
                  TPL9XK8Q2M
                </p>

              </div>

              <div>

                <p className="text-sm text-neutral-500">
                  Joined
                </p>

                <p className="mt-2 text-xl font-medium">
                  18 Jul 2026
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
