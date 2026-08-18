import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryProvider } from "@/components/EnquiryModal";
import { site } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Averiq Lifesciences — Advanced • Verified • Quality",
    template: "%s | Averiq Lifesciences",
  },
  description:
    "Averiq Lifesciences Private Limited — WHO-GMP certified pharmaceutical, cosmeceutical & nutraceutical manufacturer in Indore. Dermatology, trichology, PCD pharma franchise & third-party manufacturing.",
  keywords: [
    "PCD Pharma Franchise in Madhya Pradesh",
    "Third-Party Pharma Manufacturer in Indore",
    "Dermatology Cosmeceutical Pharma Company India",
    "Averiq Lifesciences",
    "Trichology Hair Serum Manufacturer",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.legalName,
    title: "Averiq Lifesciences — Advanced • Verified • Quality",
    description:
      "Scientifically formulated, clinically validated therapeutic products. PCD franchise & third-party manufacturing in Indore, India.",
  },
  twitter: {
    card: "summary",
    title: "Averiq Lifesciences",
    description: "Advanced • Verified • Quality — pharmaceutical & cosmeceutical formulations.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <EnquiryProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </EnquiryProvider>
      </body>
    </html>
  );
}
