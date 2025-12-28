import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buymore Computer - Quality Tech Solutions Since 2015",
  description: "Quality computers, repairs, CCTV systems, and tech gadgets for all needs. Expert sales, repair services, software development, and web design in Sri Lanka.",
  keywords: ["computer repair", "CCTV systems", "printer repair", "software development", "web design", "Sri Lanka", "Buymore Computer"],
  openGraph: {
    title: "Buymore Computer - Your Trusted Tech Partner",
    description: "Quality computers, repairs, CCTV systems, and tech gadgets for all needs.",
    url: "https://buymorecomputer.lk",
    siteName: "Buymore Computer",
    locale: "en_LK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
