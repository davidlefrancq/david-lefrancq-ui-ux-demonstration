import type { Metadata } from "next";
import "./styles/globals.scss";

export const metadata: Metadata = {
  title: "UI/UX Demonstration",
  description: "Next.js + SCSS (BEM-ready)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
