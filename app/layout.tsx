import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReferralCapture from "@/components/ReferralCapture";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://takeprofit.name.ng"),

  title: {
    default: "Take Profit",
    template: "%s | Take Profit",
  },

  description:
    "Trade with real capital. Keep more of the upside. Carry less of the risk.",

  applicationName: "Take Profit",

  keywords: [
    "Take Profit",
    "Trading",
    "Forex",
    "Crypto",
    "Stocks",
    "Investment",
    "Funding",
    "Financial Platform",
  ],

  authors: [
    {
      name: "PLeNat",
    },
  ],

  creator: "PLeNat",

  publisher: "PLeNat",

  manifest: "/site.webmanifest",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://takeprofit.name.ng",
    siteName: "Take Profit",

    title: "Take Profit",

    description:
      "Trade with real capital. Keep more of the upside. Carry less of the risk.",

    images: [
      {
        url: "https://takeprofit.name.ng/og-image.png",
        secureUrl: "https://takeprofit.name.ng/og-image.png",
        width: 1200,
        height: 630,
        alt: "Take Profit",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Take Profit",

    description:
      "Trade with real capital. Keep more of the upside. Carry less of the risk.",

    images: [
      "https://takeprofit.name.ng/og-image.png",
    ],
  },

  appleWebApp: {
    capable: true,
    title: "Take Profit",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ReferralCapture />
        {children}
      </body>
    </html>
  );
}
