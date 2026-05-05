import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gezivitrinim.com"),
  title: {
    template: "%s | Gezi Vitrinim",
    default: "Gezi Vitrinim | Malatya Çıkışlı Premium Turlar",
  },
  description: "Malatya çıkışlı günübirlik, konaklamalı ve yurt dışı premium turlar. Gezi Vitrinim ile güvenilir, konforlu ve unutulmaz seyahat deneyimleri yaşayın.",
  keywords: [
    "malatya çıkışlı turlar",
    "gezi vitrinim",
    "malatya tur acentesi",
    "kapadokya turu",
    "karadeniz turu",
    "kültür turları",
    "günübirlik turlar malatya",
    "yurtdışı turları",
  ],
  authors: [{ name: "Gezi Vitrinim" }],
  creator: "Gezi Vitrinim",
  publisher: "Gezi Vitrinim",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://gezivitrinim.com",
    siteName: "Gezi Vitrinim",
    title: "Gezi Vitrinim | Malatya Çıkışlı Premium Turlar",
    description: "Malatya çıkışlı günübirlik, konaklamalı ve yurt dışı premium turlar. Unutulmaz seyahat deneyimleri.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gezi Vitrinim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gezi Vitrinim | Malatya Çıkışlı Premium Turlar",
    description: "Malatya çıkışlı günübirlik, konaklamalı ve yurt dışı premium turlar. Unutulmaz seyahat deneyimleri.",
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
