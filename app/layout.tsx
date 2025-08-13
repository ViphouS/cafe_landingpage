import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Café Museum - Where Creativity Meets Caffeine",
  description:
    "Industrial-style coffee shop and cultural hub located on the 5th floor of U Mall PP, Phnom Penh. Experience our signature drinks, piano nights, and art exhibitions.",
  keywords:
    "cafe, coffee, museum, art, piano, phnom penh, cambodia, industrial design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: "Times New Roman", Times, serif;
  --font-serif: "Times New Roman", Times, serif;
  --font-sans: "Times New Roman", Times, serif;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
