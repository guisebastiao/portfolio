import { DEFAULT_LANGUAGE, isLanguage, LANGUAGE_COOKIE_KEY } from "@/shared/lib/language";
import { DEFAULT_THEME, isTheme, THEME_COOKIE_KEY } from "@/shared/lib/theme";
import { getCookieValue } from "@/shared/utils/get-cookie-value";
import { SITE_METADATA } from "@/assets/data/metadata";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/app/providers";
import { twMerge } from "tailwind-merge";
import type { Metadata } from "next";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: [...SITE_METADATA.keywords],
  authors: [
    {
      name: SITE_METADATA.name,
      url: SITE_METADATA.links.github,
    },
  ],
  alternates: {
    canonical: SITE_METADATA.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: SITE_METADATA.title,
    url: SITE_METADATA.url,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [
      {
        url: SITE_METADATA.ogImage,
        alt: SITE_METADATA.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [SITE_METADATA.ogImage],
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [language, theme] = await Promise.all([
    getCookieValue({
      key: LANGUAGE_COOKIE_KEY,
      fallback: DEFAULT_LANGUAGE,
      isValid: isLanguage,
    }),
    getCookieValue({
      key: THEME_COOKIE_KEY,
      fallback: DEFAULT_THEME,
      isValid: isTheme,
    }),
  ]);

  return (
    <html
      lang={language}
      className={twMerge(geistSans.variable, geistMono.variable, theme, "antialiased")}
    >
      <body className="bg-background">
        <Providers initialTheme={theme} initialLanguage={language}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
