import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dimas Rizki Dwi Saputra",
  icons: {
    icon: "/images/logotitle-.png",
    apple: "/images/logotitle-.png",
  },
  description:
    "Creative frontend developer and designer specializing in building beautiful, functional, and user-centered digital experiences. Based in Indonesia.",
  keywords: [
    "Frontend Developer",
    "Web Designer",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Dimas Rizki Dwi Saputra" }],
  creator: "Dimas Rizki Dwi Saputra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dimasrizki.com",
    title: "Dimas Rizki Dwi Saputra",
    description:
      "Creative frontend developer and designer specializing in building beautiful, functional, and user-centered digital experiences.",
    siteName: "Dimas Rizki Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dimas Rizki Dwi Saputra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimas Rizki Dwi Saputra",
    description:
      "Creative frontend developer and designer specializing in building beautiful, functional, and user-centered digital experiences.",
    images: ["/images/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable} suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
