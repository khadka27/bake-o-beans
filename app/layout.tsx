import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import FaviconSwitcher from "@/components/FaviconSwitcher";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bakeobeans.com"),
  title: "Bake O Beans - Freshly Baked. Perfectly Brewed.",
  description:
    "Experience the artistry of handcrafted coffee and the warmth of freshly baked pastries in a cozy, modern café. Located in Pokhara, Nepal.",
  keywords:
    "coffee, café, bakery, pastries, espresso, latte, croissant, artisan coffee, fresh baked goods, Pokhara, Nepal",
  authors: [{ name: "Bake O Beans" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  openGraph: {
    title: "Bake O Beans - Freshly Baked. Perfectly Brewed.",
    description:
      "Experience the artistry of handcrafted coffee and the warmth of freshly baked pastries in Pokhara, Nepal.",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Bake O Beans Café - Pokhara, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bake O Beans - Freshly Baked. Perfectly Brewed.",
    description:
      "Experience the artistry of handcrafted coffee and the warmth of freshly baked pastries in Pokhara, Nepal.",
    images: ["/images/logo.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <FaviconSwitcher />
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
