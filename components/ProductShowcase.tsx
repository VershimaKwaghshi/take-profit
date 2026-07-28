"use client";

export default function ProductShowcase() {
  return (
    <section className="bg-black py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            TAKE PROFIT
          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">
            One platform.
            <br />
            Every opportunity.
          </h2>

          <p className="mt-10 max-w-2xl text-xl leading-10 text-neutral-400">
            Built for traders who want access to capital, structured risk
            management and long term growth.
          </p>

        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {/* CAPITAL */}

          <div className="rounded-[36px] border border-neutral-800 bg-neutral-900 p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              CAPITAL
            </p>

            <h3 className="mt-10 text-6xl font-bold text-white">
              $100K
            </h3>

            <p className="mt-8 text-lg leading-9 text-neutral-400">
              Access funded capital while protecting your own.
            </p>

          </div>

          {/* GROWTH */}

          <div className="rounded-[36px] border border-neutral-800 bg-neutral-900 p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              TRADER GROWTH
            </p>

            <div className="mt-10">

              <svg
                viewBox="0 0 520 240"
                className="w-full"
              >

                <defs>

                  <linearGradient
                    id="growthGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >

                    <stop
                      offset="0%"
                      stopColor="#dc2626"
                      stopOpacity="0.45"
                    />

                    <stop
                      offset="100%"
                      stopColor="#dc2626"
                      stopOpacity="0"
                    />

                  </linearGradient>

                </defs>

                <path
                  d="
                    M0 205
                    C50 200 90 185 130 165
                    S220 120 280 95
                    S360 60 430 35
                    S480 18 520 10
                    L520 240
                    L0 240
                    Z
                  "
                  fill="url(#growthGradient)"
                />

                <path
                  d="
                    M0 205
                    C50 200 90 185 130 165
                    S220 120 280 95
                    S360 60 430 35
                    S480 18 520 10
                  "
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          </div>

          {/* USERS */}

          <div className="rounded-[36px] border border-neutral-800 bg-neutral-900 p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              USERS
            </p>

            <h3
              id="user-count"
              className="mt-10 text-6xl font-bold text-white"
            >
              0
            </h3>

            <p className="mt-8 text-lg leading-9 text-neutral-400">
              Registered users.
            </p>

          </div>

        </div>

        {/* LARGE PRODUCT PREVIEW */}

        <div className="mt-20 overflow-hidden rounded-[42px] border border-neutral-800 bg-neutral-900">

          <div className="border-b border-neutral-800 px-8 py-6">

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />

            </div>

          </div>

          <div className="grid gap-8 p-8 lg:grid-cols-[280px_1fr]">

            {/* Sidebar */}

            <div className="rounded-3xl bg-black p-6">

              <div className="space-y-6">

                <div className="rounded-2xl bg-neutral-900 p-5">

                  <p className="text-sm text-neutral-500">
                    Capital
                  </p>

                  <h4 className="mt-3 text-3xl font-bold text-white">
                    $100,000
                  </h4>

                </div>

                <div className="rounded-2xl bg-neutral-900 p-5">

                  <p className="text-sm text-neutral-500">
                    Risk
                  </p>

                  <h4 className="mt-3 text-3xl font-bold text-white">
                    Active
                  </h4>

                </div>

                <div className="rounded-2xl bg-neutral-900 p-5">

                  <p className="text-sm text-neutral-500">
                    Growth
                  </p>

                  <h4 className="mt-3 text-3xl font-bold text-white">
                    +18%
                  </h4>

                </div>

              </div>

            </div>

            {/* Main */}

            <div className="rounded-3xl bg-black p-8">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-neutral-500">
                    Account Overview
                  </p>

                  <h3 className="mt-2 text-4xl font-bold text-white">
                    Dashboard
                  </h3>

                </div>

              </div>

              <div className="mt-10">

                <svg
                  viewBox="0 0 900 320"
                  className="w-full"
                >

                  <defs>

                    <linearGradient
                      id="dashboardGraph"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >

                      <stop
                        offset="0%"
                        stopColor="#dc2626"
                        stopOpacity="0.4"
                      />

                      <stop
                        offset="100%"
                        stopColor="#dc2626"
                        stopOpacity="0"
                      />

                    </linearGradient>

                  </defs>

                  <path
                    d="
                      M0 270
                      C80 255 130 220 180 210
                      S280 160 360 150
                      S480 120 560 90
                      S690 55 780 35
                      S860 18 900 12
                      L900 320
                      L0 320
                      Z
                    "
                    fill="url(#dashboardGraph)"
                  />

                  <path
                    d="
                      M0 270
                      C80 255 130 220 180 210
                      S280 160 360 150
                      S480 120 560 90
                      S690 55 780 35
                      S860 18 900 12
                    "
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                </svg>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
