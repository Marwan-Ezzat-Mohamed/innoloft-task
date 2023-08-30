import ReduxProvider from "@/components/Redux/Provider";
import "./globals.css";
import type { Metadata } from "next";

import { Layout } from "@/components/Layout";

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
