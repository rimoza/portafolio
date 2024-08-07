import { Alegreya } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/Layout/Layout";
import "./styles/globals.css";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={alegreya.className}>
        <Layout className={alegreya.className}>
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  );
}
