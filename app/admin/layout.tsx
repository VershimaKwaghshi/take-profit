import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        <AdminSidebar />

        <section className="flex-1 overflow-y-auto">

          {children}

        </section>

      </div>

    </main>
  );
}
