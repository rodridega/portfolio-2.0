import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const title = "Rodrigo Deganutti - Desarrollador Web Full Stack";
const description = "Desarrollador Web Full Stack especializado en crear experiencias digitales excepcionales.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-2-0-puce-tau.vercel.app"),
  title,
  description,
  keywords: "desarrollador web, full stack, react, next.js, tailwindcss, wordpress",
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
