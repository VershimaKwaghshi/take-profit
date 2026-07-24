export default function AdminPage() {
  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

          <div>

            <h1 className="text-3xl font-semibold">
              Take Profit Admin
            </h1>

            <p className="text-neutral-500">
              Internal Management Portal
            </p>

          </div>

          <div className="rounded-full bg-black px-5 py-2 text-white">

            Administrator

          </div>

        </div>

      </div>

      <div className="mx-auto max-w-7xl p-8">

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-[30px] bg-blue-600 p-8 text-white">

            <p>Total Waitlist</p>

            <h2 className="mt-4 text-5xl font-semibold">
              —
            </h2>

          </div>

          <div className="rounded-[30px] bg-red-600 p-8 text-white">

            <p>Pending Verification</p>

            <h2 className="mt-4 text-5xl font-semibold">
              —
            </h2>

          </div>

          <div className="rounded-[30px] bg-black p-8 text-white">

            <p>Verified Users</p>

            <h2 className="mt-4 text-5xl font-semibold">
              —
            </h2>

          </div>

          <div className="rounded-[30px] bg-white p-8 shadow">

            <p>Announcements</p>

            <h2 className="mt-4 text-5xl font-semibold">
              —
            </h2>

          </div>

        </div>

      </div>

    </main>
  );
}
