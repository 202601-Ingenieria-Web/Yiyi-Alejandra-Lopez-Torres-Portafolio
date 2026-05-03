import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yiyi Alejandra Lopez Torres — Portafolio",
  description: "Estudiante de Ingeniería de Sistemas enfocada en datos. Power BI, Python, SQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-rose-50 text-gray-800 antialiased">{children}</body>
    </html>
  );
}
