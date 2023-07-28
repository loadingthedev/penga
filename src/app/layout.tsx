import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/Header";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "Penga",
  description: "Penga is a manga reader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
