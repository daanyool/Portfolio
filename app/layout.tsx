import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mark Daniel Fernandez | Software Developer",
  description:
    "Portfolio of Mark Daniel Fernandez, a Computer Science graduate and aspiring software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}