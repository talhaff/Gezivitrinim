import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gezivitrinim.com"),
  title: "Gezi Vitrinim | Sınırları Aşan Deneyimler",
  description: "Premium seyahat ve tur deneyimi. Türkiye ve yurt dışı turlarımızla unutulmaz anılar yaratın.",
  keywords: ["tur", "seyahat", "tatil", "turizm", "tur rehberi", "kapadokya", "bodrum", "antalya"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://gezivitrinim.com",
    siteName: "Gezi Vitrinim",
    title: "Gezi Vitrinim | Sınırları Aşan Deneyimler",
    description: "Premium seyahat ve tur deneyimi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gezi Vitrinim",
    description: "Sınırları Aşan Deneyimler",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
