import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://takeprofit.name.ng"),

  title: {
    default: "Take Profit",
    template: "%s | Take Profit",
  },

  description:
    "Trade Smarter. Build Wealth Together.",

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
    title: "Take Profit",

    description:
      "Trade Smarter. Build Wealth Together.",

    url: "https://takeprofit.name.ng",

    siteName: "Take Profit",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Take Profit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Take Profit",

    description:
      "Trade Smarter. Build Wealth Together.",

    images: ["/og-image.png"],
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
    <html lang="en">

      <body>

        {children}

      </body>

    </html>
  );
}