import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({subsets: ["latin"] });

//Need to change this section right here to match what description we want to put
export const metadata: Metadata = {
  title: "Mangia DMA",
  description: "Grow your business with Mangia DMA, a design & development studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>{children}
      </body>
    </html>
  );
}
