import { Suspense } from "react";
import { redirect } from "next/navigation";
import { UserProvider } from "./UserProvider";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import MobileNav from "@/components/MobileNav";
import { getSessionFromCookies } from "@/lib/auth";
import prisma from "@/lib/prisma";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSessionFromCookies();

  if (session) {
    const subscription = await prisma.subscription.findUnique({
      where: { userId: session.id },
      select: { status: true, currentPeriodEnd: true },
    });

    const isActive =
      subscription?.status === "active" &&
      subscription.currentPeriodEnd &&
      subscription.currentPeriodEnd > new Date();

    if (!isActive) {
      redirect("/subscription");
    }
  }

  return (
    <Suspense fallback={null}>
      <UserProvider>
        <main className="min-h-screen bg-deck">
          <MobileNav />
          <div className="flex min-h-screen">
            <Sidebar />

            <section className="min-w-0 flex-1">
              <div className="px-0 py-0 lg:px-8 lg:py-8">
                <Topbar />
                {children}
              </div>
            </section>
          </div>
        </main>
      </UserProvider>
    </Suspense>
  );
}
