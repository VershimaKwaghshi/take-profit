export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-semibold text-black">
          You’re on the waitlist
        </h1>

        <p className="mt-4 text-lg text-neutral-600">
          Your email has been verified successfully.
        </p>

        <p className="mt-2 text-neutral-500">
          We’ll let you know when Take Profit is ready for you.
        </p>
      </div>
    </main>
  );
}