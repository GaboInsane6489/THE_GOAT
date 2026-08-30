import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ObsidianBackground } from "@/components/core/ObsidianBackground";
import { NavbarFloating } from "@/components/core/NavbarFloating";
import { FooterMinimal } from "@/components/core/FooterMinimal";
import { PERSONAL_INFO } from "@/data/portfolioData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
  description: PERSONAL_INFO.summary,
  keywords: [
    "Gabriel González",
    "Gabriel Alexander González García",
    "Software Engineer",
    "Junior Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    "RBAC",
    "Gemini API",
    "n8n",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.linkedin }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://the-goat-portfolio.vercel.app",
    title: `${PERSONAL_INFO.name} | Junior Software Engineer`,
    description: PERSONAL_INFO.tagline,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Junior Software Engineer`,
    description: PERSONAL_INFO.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Person JSON-LD for rich Google snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.role,
    url: PERSONAL_INFO.linkedin,
    sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
    alumniOf: "Instituto Universitario Jesús Obrero Fe y Alegría (IUJO)",
    description: PERSONAL_INFO.summary,
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-100 selection:bg-sky-500/20 selection:text-sky-200">
        <ObsidianBackground />
        <NavbarFloating />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 flex flex-col gap-24">
          {children}
        </main>
        <FooterMinimal />
      </body>
    </html>
  );
}
