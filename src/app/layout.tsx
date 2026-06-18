import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alphonso Ecosystem — One Ecosystem. Infinite Impact.",
  description: "A local-first AI operating environment that coordinates 9 specialized agents to research, create, execute, govern, and automate — while you stay in control.",
  icons: [
    { rel: "icon", url: "/favicon.png", sizes: "64x64", type: "image/png" },
    { rel: "apple-touch-icon", url: "/favicon.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}