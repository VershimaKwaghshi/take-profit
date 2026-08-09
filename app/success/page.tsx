import Image from "next/image";
import FloorMotif from "@/components/FloorMotif";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6">
      <div className="w-full max-w-md text-center">
        <Image
          src="/logo.svg"
          alt="Take Profit"
          width={38}
          height={38}
          className="mx-auto"
        />

        <h1 className="mt-8 text-3xl font-semibold text-ink">
          You&apos;re on the waitlist
        </h1>

        <p className="mt-4 text-lg text-ash">
          Your email has been verified successfully.
        </p>

        <p className="mt-2 text-ash">
          We&apos;ll let you know when Take Profit is ready for you.
        </p>
      </div>

      <div className="mt-16 w-full max-w-md opacity-70">
        <FloorMotif tone="ink" showLabel={false} />
      </div>
    </main>
  );
}