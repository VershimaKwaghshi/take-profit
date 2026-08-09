import type { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    code: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { code } = await params;

  const inviteUrl = `https://takeprofit.name.ng/invite/${code}`;

  return {
    title: "Join Take Profit",

    description: "Trade Smarter. Build Wealth Together.",

    openGraph: {
      title: "Join Take Profit",
      description: "Trade Smarter. Build Wealth Together.",
      url: inviteUrl,
      siteName: "Take Profit",
      images: [
        {
          url: "https://takeprofit.name.ng/og-image.png",
          width: 1200,
          height: 630,
          alt: "Take Profit",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Join Take Profit",
      description: "Trade Smarter. Build Wealth Together.",
      images: [
        "https://takeprofit.name.ng/og-image.png",
      ],
    },
  };
}

export default async function InvitePage({
  params,
}: Props) {
  const { code } = await params;

  redirect(`/?ref=${encodeURIComponent(code)}`);
}