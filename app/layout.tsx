"use client";
import "./globals.css";
import './lib/18n';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          <link
            href="https://fonts.googleapis.com/css2?family=Over+the+Rainbow&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Cascadia+Mono:ital,wght@0,200..700;1,200..700&family=Shadows+Into+Light&display=swap" 
            rel="stylesheet"
          />
          {children}
        </body>
      </html>
    </>
  );
}
