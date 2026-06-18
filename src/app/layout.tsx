import "./globals.css";
import type { Metadata } from "next";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export const metadata: Metadata = {
  title: "Alphonso Ecosystem — One Ecosystem. Infinite Impact.",
  description: "A local-first AI operating environment that coordinates 9 specialized agents to research, create, execute, govern, and automate — while you stay in control.",
  icons: [
    { rel: "icon", url: asset("/favicon.png"), sizes: "64x64", type: "image/png" },
    { rel: "apple-touch-icon", url: asset("/favicon.png") },
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