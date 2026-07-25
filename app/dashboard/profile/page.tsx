"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { useUser } from "../UserProvider";

export default function ProfilePage() {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-8">

          <Topbar />

          <div className="mt-8 rounded-[32px] bg-white p-10 shadow">

            <h1 className="text-4xl font-semibold">
              Profile
            </h1>

            <div className="mt-10 space-y-6">

              <div>
                <p className="text-sm text-neutral-500">
                  First Name
                </p>

                <p className="text-xl font-medium">
                  {user?.first_name ?? "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Last Name
                </p>

                <p className="text-xl font-medium">
                  {user?.last_name ?? "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Email
                </p>

                <p className="text-xl font-medium">
                  {user?.email ?? "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Referrals
                </p>

                <p className="text-xl font-medium">
                  {user?.referral_count ?? 0}
                </p>
              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}