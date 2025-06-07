import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RedStiQ - Mining for Web Solutions, Crafting Your Success",
  description:
    "Professional web development services with a unique Minecraft-inspired approach. Custom websites, e-commerce, and digital solutions.",
  keywords:
    "web development, minecraft theme, custom websites, e-commerce, RedStiQ",
  authors: [{ name: "RedStiQ Team" }],
  openGraph: {
    title: "RedStiQ - Mining for Web Solutions",
    description: "Professional web development services with a unique approach",
    type: "website",
    url: "https://redstiq.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <BackToTop />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
