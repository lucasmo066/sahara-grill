import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Sahara Grill",
  description: "Fresh and delicious Mediterranean cuisine in Woodstock, GA",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b91313" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Fresh and delicious Mediterranean cuisine in Woodstock, GA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Sahara Grill</title>
      </Head>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}>
            <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
    </html>
  );
}
