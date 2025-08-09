import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "XELERATE | Dashboard",
  description: "Test task for XELERATE company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='layout'>
        {children}
      </body>
    </html>
  );
}
