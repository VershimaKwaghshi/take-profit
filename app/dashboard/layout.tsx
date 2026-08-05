import { Suspense } from "react";
import { UserProvider } from "./UserProvider";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <UserProvider>
        <main className="min-h-screen bg-deck">
          <div className="flex">
            <Sidebar />

            <section className="flex-1 p-6 md:p-10">
              <Topbar />
              {children}
            </section>
          </div>
        </main>
      </UserProvider>
    </Suspense>
  );
}