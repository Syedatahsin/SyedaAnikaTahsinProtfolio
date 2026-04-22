import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syeda Anika Tahsin Portfolio 🌟",
  description: "A premium portfolio showcasing the work and skills of Syeda Anika Tahsin, a Creative Web Developer and UI Specialist.",
  icons: {
    icon: "/icon.png",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingBubbles />
          <div className="relative z-10 w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

