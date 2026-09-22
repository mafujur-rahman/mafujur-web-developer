import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/utils/scroll-top";
import ClientWrapper from "@/components/utils/ClientWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

// 🔁 Replace with your actual Vercel URL after first deploy
// e.g. "https://mafujur-rahman.vercel.app"
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mafujur Rahman — Full-Stack Web Developer",
    template: "%s | Mafujur Rahman",
  },

  description:
    "Mafujur Rahman is a full-stack web developer specializing in Next.js, React, TypeScript, Node.js, and Express. Building secure, scalable, and modern web applications.",

  keywords: [
    "Mafujur Rahman",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Express.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Dhaka Bangladesh Developer",
  ],

  authors: [{ name: "Mafujur Rahman", url: siteUrl }],
  creator: "Mafujur Rahman",
  publisher: "Mafujur Rahman",

  applicationName: "Mafujur Rahman Portfolio",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mafujur Rahman",
    title: "Mafujur Rahman — Full-Stack Web Developer",
    description:
      "Full-stack web developer crafting secure, scalable, and modern digital experiences with Next.js, React, Node.js, and TypeScript.",
    images: [
      {
        url: "/images/jewel.png",
        width: 1200,
        height: 630,
        alt: "Mafujur Rahman — Full-Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mafujur Rahman — Full-Stack Web Developer",
    description:
      "Full-stack web developer crafting secure, scalable, and modern digital experiences.",
    images: ["/images/jewel.png"],
    // creator: "@yourhandle", // add later if you have one
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  category: "technology",
};

// 🔹 JSON-LD structured data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mafujur Rahman",
  url: siteUrl,
  jobTitle: "Full-Stack Web Developer",
  email: "mdmafuj000@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  sameAs: [
    "https://www.linkedin.com/in/mafujurrahman",
    "https://github.com/mafujur-rahman",
    "https://www.instagram.com/jewel__98x",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Full-Stack Web Development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <ClientWrapper>
          {children}
          <ScrollToTop />
        </ClientWrapper>
      </body>
    </html>
  );
}