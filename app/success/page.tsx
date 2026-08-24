import TPLogo from "@/components/TPLogo";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <TPLogo size={38} />

        <h1 className="mt-8 text-3xl font-semibold text-ink">
          You&apos;re verified
        </h1>

        <p className="mt-4 text-lg text-ash">
          Your email has been verified successfully.
        </p>

        <p className="mt-2 text-ash">
          <a href="/dashboard" className="text-ink font-semibold hover:underline">
            Continue to your dashboard
          </a>
        </p>
      </div>
    </main>
  );
}
