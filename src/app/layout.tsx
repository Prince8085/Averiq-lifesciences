import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
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
    "AVERIQ LIFESCIENCES PVT LTD. — an ethical pharmaceutical marketing company supplying dermatology, trichology, dental and nutraceutical formulations to doctors and healthcare professionals across India.",
  keywords: [
    "Pharmaceutical Company in India",
    "Dermatology Cosmeceutical Pharma Company India",
    "Averiq Lifesciences",
    "Trichology Hair Serum Range",
    "Acne Gel Range India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.legalName,
    title: "Averiq Lifesciences — Advanced • Verified • Quality",
    description:
      "Scientifically formulated therapeutic products supplied to doctors and healthcare professionals across India.",
  },
  twitter: {
    card: "summary",
    title: "Averiq Lifesciences",
    description: "Advanced • Verified • Quality — pharmaceutical & cosmeceutical formulations.",
  },
  icons: {
    icon: "/favicon.png",
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
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
