"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function VerifyContent() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="w-full max-w-3xl text-center">

        <img
          src="/logo.svg"
          alt="Take Profit"
          className="mx-auto w-28"
        />

        <div className="mt-10 inline-flex rounded-full bg-blue-100 px-5 py-2">

          <span className="text-sm font-semibold text-blue-700">
            STEP 1 OF 4
          </span>

        </div>

        <h1 className="mt-8 text-5xl md:text-6xl font-semibold text-black">

          Application
          <br />
          Received.

        </h1>

        <p className="mt-8 text-xl leading-9 text-neutral-600">

          We've sent a verification email to

        </p>

        <p className="mt-4 text-2xl font-semibold text-black break-all">

          {email}

        </p>

        <div className="mt-14 rounded-[36px] bg-black p-10 text-left text-white">

          <h2 className="text-2xl font-semibold">

            What happens next?

          </h2>

          <div className="mt-8 space-y-8">

            <div className="flex gap-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold">
                1
              </div>

              <div>

                <h3 className="font-semibold">
                  Verify your email
                </h3>

                <p className="mt-2 text-neutral-300">
                  Click the verification link we sent.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-semibold">
                2
              </div>

              <div>

                <h3 className="font-semibold">
                  Access your dashboard
                </h3>

                <p className="mt-2 text-neutral-300">
                  Your dashboard opens immediately after verification.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold">
                3
              </div>

              <div>

                <h3 className="font-semibold">
                  Invite verified traders
                </h3>

                <p className="mt-2 text-neutral-300">
                  Unlock more platform features as referrals verify.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black font-semibold">
                4
              </div>

              <div>

                <h3 className="font-semibold">
                  Prepare for launch
                </h3>

                <p className="mt-2 text-neutral-300">
                  Learn, explore and be ready when Take Profit goes live.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={null}>
      <VerifyContent />
    </Suspense>
  );
}