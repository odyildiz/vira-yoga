import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vira Yoga - Şehirde Topraklanma",
  description: "Şehrin kalbinde, Vira Yoga bir anlık mola sunar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Noto+Serif:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md text-body-md antialiased overflow-x-hidden min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
