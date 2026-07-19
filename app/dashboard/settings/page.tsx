import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-10">

          <Topbar />

          <div className="mt-10 rounded-[36px] border border-neutral-200 bg-white shadow-sm">

            <div className="border-b border-neutral-200 p-10">

              <h1 className="text-4xl font-semibold">
                Settings
              </h1>

            </div>

            <div className="divide-y divide-neutral-200">

              <Link
                href="/login"
                className="flex items-center justify-between p-8 transition hover:bg-neutral-50"
              >

                <div>

                  <h2 className="text-xl font-medium">
                    Change Email
                  </h2>

                  <p className="mt-2 text-neutral-500">
                    Update the email connected to your account.
                  </p>

                </div>

                <span>
                  →
                </span>

              </Link>

              <button
                className="flex w-full items-center justify-between p-8 text-left transition hover:bg-neutral-50"
              >

                <div>

                  <h2 className="text-xl font-medium">
                    Notifications
                  </h2>

                  <p className="mt-2 text-neutral-500">
                    Coming Soon
                  </p>

                </div>

                <span>
                  →
                </span>

              </button>

              <button
                className="flex w-full items-center justify-between p-8 text-left transition hover:bg-neutral-50"
              >

                <div>

                  <h2 className="text-xl font-medium">
                    Sign Out
                  </h2>

                  <p className="mt-2 text-neutral-500">
                    End your current session.
                  </p>

                </div>

                <span>
                  →
                </span>

              </button>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
