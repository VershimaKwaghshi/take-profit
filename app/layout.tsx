import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ReferralCapture from "@/components/ReferralCapture";

const sourceSerif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "500"],
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
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <ReferralCapture />
        {children}
      </body>
    </html>
  );
}
