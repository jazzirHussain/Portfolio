import { Geist, Geist_Mono, Inter, Syne } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata = {
  title: {
    default: "Jazzir Hussain | Full Stack Engineer",
    template: "%s | Jazzir Hussain",
  },
  description:
    "Full Stack Engineer building end-to-end production systems — React, Node.js, AWS, AI integrations. Built apps with 600+ daily users. Open to opportunities in Germany.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "AWS",
    "Portfolio",
    "Software Engineer",
    "Germany Jobs",
    "JavaScript Developer",
    "SaaS",
    "IoT",
  ],
  authors: [{ name: "Jazzir Hussain" }],
  creator: "Jazzir Hussain",
  metadataBase: new URL("https://jazzirhussain.com"), // Replace with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jazzirhussain.com",
    title: "Jazzir Hussain | Full Stack Engineer",
    description:
      "I build production-ready systems end-to-end. 600+ DAU apps. Open to Germany roles.",
    siteName: "Jazzir Hussain Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Jazzir Hussain Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jazzir Hussain | Full Stack Engineer",
    description: "Full stack engineer shipping real products.",
    images: ["/preview.png"],
    creator: "@jazzirhussain",
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
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jazzir Hussain",
    url: "https://jazzirhussain.com",
    jobTitle: "Full Stack Engineer",
    sameAs: [
      "https://linkedin.com/in/jazzirhussain",
      "https://github.com/jazzirhussain",
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "AWS",
      "Full Stack Development",
      "IoT",
      "AI Integration",
    ],
    worksFor: {
      "@type": "Organization",
      name: "TCS",
    },
    description:
      "Full Stack Engineer building end-to-end production systems with React, Node.js, and AWS.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Animation Script */}
        <Script
          id="animation-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document
        .querySelectorAll('.fade-in')
        .forEach((el) => observer.observe(el));
    `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
