import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const Metadata: Metadata = {
  title: "Lodgelink",
  description: "Find your next student lodge easily",
  icons: {
    icon: "/logo.png",
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-hdvh flex flex-col bg-white text-blue-950">
        {children}
      </body>
    </html>
  );
}
