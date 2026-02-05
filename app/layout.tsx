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
  title: "Bake O Beans Café | Best Coffee & Bakery in Simalchaur, Pokhara-8",
  description:
    "Bake O Beans Café in Simalchaur, Pokhara-8 offers freshly brewed coffee, handcrafted drinks, and baked pastries in a cozy café setting. The best coffee shop near you for the perfect brew in Pokhara.",
  keywords:
    "Bake O Beans Café, coffee shop in Pokhara, café in Simalchaur, bakery in Pokhara, best coffee Pokhara, Pokhara café, coffee and bakery Nepal, coffee near me Pokhara, bakery near me Simalchaur",
  authors: [{ name: "Bake O Beans Café" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  openGraph: {
    title: "Bake O Beans Café | Coffee & Bakery in Pokhara",
    description:
      "Enjoy freshly brewed coffee and baked pastries at Bake O Beans Café in Simalchaur, Pokhara-8.",
    type: "website",
    locale: "en_US",
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
    title: "Bake O Beans Café | Pokhara",
    description:
      "Premium coffee, fresh bakery, and cozy vibes in Simalchaur, Pokhara-8.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Bake O Beans Café",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Simalchaur",
                addressLocality: "Pokhara",
                addressRegion: "Gandaki",
                postalCode: "33700",
                addressCountry: "NP",
              },
              openingHours: "Mo-Fr 07:00-21:00, Sa 08:00-22:00, Su 08:00-20:00",
              servesCuisine: ["Coffee", "Bakery"],
              priceRange: "NPR",
            }),
          }}
        />
      </head>
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
