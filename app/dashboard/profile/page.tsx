"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { useUser } from "@/app/dashboard/UserProvider";

function formatJoinedDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function ProfilePage() {
  const { user, loading, error } = useUser();

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

            {error && (
              <p className="mt-6 text-red-600">
                {error}
              </p>
            )}

            <div className="mt-12 grid gap-8 md:grid-cols-2">

              <div>

                <p className="text-sm text-neutral-500">
                  Full Name
                </p>

                <p className="mt-2 text-xl font-medium">
                  {loading
                    ? "Loading..."
                    : user
                    ? `${user.first_name} ${user.last_name}`
                    : "—"}
                </p>

              </div>

              <div>

                <p className="text-sm text-neutral-500">
                  Email
                </p>

                <p className="mt-2 text-xl font-medium">
                  {loading ? "Loading..." : user?.email ?? "—"}
                </p>

              </div>

              <div>

                <p className="text-sm text-neutral-500">
                  Country
                </p>

                <p className="mt-2 text-xl font-medium">
                  {loading ? "Loading..." : user?.country ?? "—"}
                </p>

              </div>

              <div>

                <p className="text-sm text-neutral-500">
                  Referral Code
                </p>

                <p className="mt-2 text-xl font-medium">
                  {loading
                    ? "Loading..."
                    : user?.referral_code ?? "Pending"}
                </p>

              </div>

              <div>

                <p className="text-sm text-neutral-500">
                  Joined
                </p>

                <p className="mt-2 text-xl font-medium">
                  {loading
                    ? "Loading..."
                    : user?.created_at
                    ? formatJoinedDate(user.created_at)
                    : "—"}
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
