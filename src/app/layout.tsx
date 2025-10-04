
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";


interface RootLayoutProps {
  children: ReactNode;
}


export const metadata: Metadata = {
  title: "Lodgelink",
  description: "Find student lodges with ease",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  icons: {
    icon: "/logo.png", 
  },
};

// Root layout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col bg-white text-blue-950">
        {children}
      </body>
    </html>
  );
}