import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import userData from '@/data/userData.json';
import "../../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: userData.seo.defaultTitle,
  description: userData.seo.defaultDescription,
  keywords: userData.seo.keywords,
  authors: [{ name: userData.seo.author.name, url: userData.seo.author.url }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
     title: userData.seo.openGraph.title,
     description: userData.seo.openGraph.description,
     url: userData.seo.website.url,
     siteName: userData.seo.siteName,
     images: [
       {
         url: userData.seo.website.ogImage,
         width: 1200,
         height: 630,
       },
     ],
     locale: userData.seo.openGraph.locale,
     type: userData.seo.openGraph.type as 'website',
   },
   twitter: {
     card: userData.seo.twitter.card as 'summary_large_image',
     title: userData.seo.twitter.title,
     description: userData.seo.twitter.description,
     site: userData.seo.twitter.site,
     creator: userData.seo.twitter.creator,
     images: [userData.seo.website.twitterImage],
   },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>  
      </body>
    </html>
  );
}
