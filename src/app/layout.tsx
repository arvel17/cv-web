import "./globals.css";
import { ReactNode } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import SmoothScroll from "./components/SmoothScroll";
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
  metadataBase: new URL("https://arvelkartawijaya.vercel.app"), // Ganti dengan domain yang sebenarnya
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arvelkartawijaya.vercel.app",
    title: "Arvel Kartawijaya - Software Engineer Portfolio",
    description:
      "Experienced Software Engineer specializing in Next.js, React, TypeScript, and Supabase. Fresh graduate from Bina Nusantara University with internship experience at Kalbe Farma.",
    siteName: "Arvel Kartawijaya Portfolio",
    images: [
      {
        url: "/profile.jpg",
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
    images: ["/profile.jpg"],
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
    google: "your-google-verification-code", // Ganti dengan kode verifikasi Google
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
              url: "https://arvelkartawijaya.vercel.app",
              image: "https://arvelkartawijaya.vercel.app/profile.jpg",
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
        <header className="fixed top-0 w-full glass z-50">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-transparent bg-clip-text text-xl font-bold">
              A.K
            </h1>
            <ul className="flex gap-8 text-sm">
              <li>
                <a
                  href="#about"
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                  aria-label="Navigate to About section"
                >
                  <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    About
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                  aria-label="Navigate to Education section"
                >
                  <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    Education
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                  aria-label="Navigate to Experience section"
                >
                  <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    Experience
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                  aria-label="Navigate to Skills section"
                >
                  <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    Skills
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                  aria-label="Navigate to Contact section"
                >
                  <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-pink-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    Contact
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
