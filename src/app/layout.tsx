import ReduxProvider from "@/components/Redux/Provider";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Layout } from "@/components/Layout";

const open_sans = Open_Sans({ subsets: ["greek"] });

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
    <html lang="en">
      <body className={open_sans.className}>
        <ReduxProvider>
          <main className="flex flex-col grow bg-snow-white">
            <Layout>{children}</Layout>
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
