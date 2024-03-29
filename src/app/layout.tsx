import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Disney+ Hotstar",
  description: "Nextjs Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Suspense fallback={<>...Loading</>}> {children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
