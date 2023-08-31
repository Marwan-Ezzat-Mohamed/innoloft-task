import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import ReduxProvider from "@/components/Redux/Provider";
import { Layout } from "@/components/Layout";
import "./globals.css";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innoloft",
  description: "innoloft/Frontend-Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <ReduxProvider>
          <main className="flex flex-col grow bg-snow-white">
            <Layout>{children}</Layout>
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
