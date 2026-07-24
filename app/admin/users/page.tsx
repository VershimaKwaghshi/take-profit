export default function UsersPage() {
  return (
    <main className="min-h-screen bg-neutral-100">

      {/* Header */}

      <div className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

          <div>

            <h1 className="text-4xl font-semibold text-black">
              Users
            </h1>

            <p className="mt-2 text-neutral-500">
              Manage every Take Profit user.
            </p>

          </div>

        </div>

      </div>

      <div className="mx-auto max-w-7xl p-8">

        {/* Search */}

        <div className="rounded-[30px] bg-white p-8 shadow">

          <h2 className="text-2xl font-semibold">
            Search Users
          </h2>

          <div className="mt-6">

            <input
              type="text"
              placeholder="Search by email, name, referral code or phone..."
              className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none focus:border-blue-600"
            />

          </div>

        </div>

        {/* Table */}

        <div className="mt-8 rounded-[30px] bg-white shadow overflow-hidden">

          <table className="w-full">

            <thead className="border-b bg-neutral-50">

              <tr>

                <th className="px-6 py-5 text-left">
                  Name
                </th>

                <th className="px-6 py-5 text-left">
                  Email
                </th>

                <th className="px-6 py-5 text-left">
                  Country
                </th>

                <th className="px-6 py-5 text-left">
                  Referrals
                </th>

                <th className="px-6 py-5 text-left">
                  Status
                </th>

                <th className="px-6 py-5 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="px-6 py-6">
                  —
                </td>

                <td className="px-6 py-6">
                  —
                </td>

                <td className="px-6 py-6">
                  —
                </td>

                <td className="px-6 py-6">
                  —
                </td>

                <td className="px-6 py-6">

                  <span className="rounded-full bg-neutral-200 px-3 py-1 text-sm">

                    —

                  </span>

                </td>

                <td className="px-6 py-6">

                  <div className="flex gap-3">

                    <button className="rounded-full bg-blue-600 px-4 py-2 text-white">
                      View
                    </button>

                    <button className="rounded-full bg-black px-4 py-2 text-white">
                      Edit
                    </button>

                    <button className="rounded-full bg-red-600 px-4 py-2 text-white">
                      Suspend
                    </button>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
