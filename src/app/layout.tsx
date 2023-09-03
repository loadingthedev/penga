import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "react-indiana-drag-scroll/dist/style.css";

import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/header";
import QueryProvider from "@/providers/query-provider";

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
          <QueryProvider>
            <Header />
            <div className="container">{children}</div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
