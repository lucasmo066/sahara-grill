import type { Metadata } from "next";
import { Aladin, Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Sahara Grill",
  description: "Fresh and delicious Mediterranean cuisine in Woodstock, GA",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontAladin = Aladin({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aladin",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontAladin.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
