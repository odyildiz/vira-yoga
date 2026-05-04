import type { Metadata } from "next";
import "./globals.css";
import StickyContactBar from "@/components/StickyContactBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://virayoga.com"),
  title: {
    default: "Vira Yoga | Kadıköy Moda'da Yoga Stüdyosu",
    template: "%s | Vira Yoga Kadıköy",
  },
  description: "Kadıköy Moda'nın kalbinde, her seviyeye uygun Vinyasa, Yin Yoga ve Hamak Yogası dersleri ile Vira Yoga'da kendinize bir anlık mola verin.",
  keywords: ["Yoga", "Kadıköy Yoga", "Moda Yoga Stüdyosu", "Vinyasa Yoga", "Yin Yoga", "Hamak Yogası", "Yoga Kursu", "Yeni Başlayanlar İçin Yoga"],
  authors: [{ name: "Vira Yoga" }],
  creator: "Vira Yoga",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://virayoga.com",
    title: "Vira Yoga | Kadıköy Moda'da Yoga Stüdyosu",
    description: "Kadıköy Moda'nın kalbinde, her seviyeye uygun Vinyasa, Yin Yoga ve Hamak Yogası dersleri ile Vira Yoga'da kendinize bir anlık mola verin.",
    siteName: "Vira Yoga",
    images: [
      {
        url: "/image/hero/about-page-hero-image.png",
        width: 1200,
        height: 630,
        alt: "Vira Yoga Stüdyosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vira Yoga | Kadıköy Moda'da Yoga Stüdyosu",
    description: "Kadıköy Moda'nın kalbinde, her seviyeye uygun Vinyasa, Yin Yoga ve Hamak Yogası dersleri ile Vira Yoga'da kendinize bir anlık mola verin.",
    images: ["/image/hero/about-page-hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "SportsActivityLocation"],
  "name": "Vira Yoga",
  "image": "https://virayoga.com/image/hero/about-page-hero-image.png",
  "@id": "https://virayoga.com",
  "url": "https://virayoga.com",
  "telephone": "+905551234567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Moda Cad. No: 123",
    "addressLocality": "Kadıköy",
    "addressRegion": "İstanbul",
    "postalCode": "34710",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.9833,
    "longitude": 29.0278
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/virayoga"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-background text-on-background font-body-md text-body-md antialiased overflow-x-hidden min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Noto+Serif:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {children}
        <StickyContactBar />
      </body>
    </html>
  );
}
