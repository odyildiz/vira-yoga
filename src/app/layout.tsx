import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vira Yoga | Kadıköydeki Eviniz",
  description: "Kadıköyün kalbinde, Vira Yoga ile bir anlık mola.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-background text-on-background font-body-md text-body-md antialiased overflow-x-hidden min-h-full flex flex-col">
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Noto+Serif:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}
