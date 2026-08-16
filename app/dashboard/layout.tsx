import { Suspense } from "react";
import { UserProvider } from "./UserProvider";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import MobileNav from "@/components/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
