import "./globals.css";
import { ReactNode } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Arvel Kartawijaya - Software Engineer Portfolio",
    template: "%s | Arvel Kartawijaya",
  },
  description:
    "Experienced Software Engineer specializing in Next.js, React, TypeScript, and Supabase. Fresh graduate from Bina Nusantara University with internship experience at Kalbe Farma. View my portfolio showcasing modern web applications and technical expertise.",
  keywords: [
    "Arvel Kartawijaya",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Frontend Developer",
    "Supabase",
    "Portfolio",
    "Web Developer",
    "Indonesia",
    "Malang",
    "Bina Nusantara University",
    "Computer Science",
    "Kalbe Farma",
  ],
  authors: [{ name: "Arvel Kartawijaya" }],
  creator: "Arvel Kartawijaya",
  publisher: "Arvel Kartawijaya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cv-arvelk.vercel.app/"), // Ganti dengan domain yang sebenarnya
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cv-arvelk.vercel.app/",
    title: "Arvel Kartawijaya - Software Engineer Portfolio",
    description:
      "Experienced Software Engineer specializing in Next.js, React, TypeScript, and Supabase. Fresh graduate from Bina Nusantara University with internship experience at Kalbe Farma.",
    siteName: "Arvel Kartawijaya Portfolio",
    images: [
      {
        url: "https://cv-arvelk.vercel.app/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Arvel Kartawijaya - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvel Kartawijaya - Software Engineer Portfolio",
    description:
      "Experienced Software Engineer specializing in Next.js, React, TypeScript, and Supabase.",
    images: ["https://cv-arvelk.vercel.app/profile.jpg"],
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
  verification: {
    google: "2-tOdih60NvMOdsl9EyuIZBeXJ9Y4zbOeiYt-OfE-BM", // Ganti dengan kode verifikasi Google
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arvel Kartawijaya",
              jobTitle: "Software Engineer",
              description:
                "Experienced Software Engineer specializing in Next.js, React, TypeScript, and Supabase",
              url: "https://cv-arvelk.vercel.app",
              image: "https://cv-arvelk.vercel.app/profile.jpg",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Bina Nusantara University",
              },
              worksFor: {
                "@type": "Organization",
                name: "Kalbe Farma",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Malang",
                addressCountry: "Indonesia",
              },
              sameAs: [
                "https://linkedin.com/in/arvelkartawijaya",
                "https://github.com/arvelkartawijaya",
              ],
            }),
          }}
        />
      </head>
      <body className="animated-bg text-white overflow-x-hidden">
        <SmoothScroll />
        <ParticlesBackground />
        <Header />
        <main className="pt-24 md:pt-20">{children}</main>
      </body>
    </html>
  );
}
