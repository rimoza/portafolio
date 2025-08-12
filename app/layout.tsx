import { Alegreya } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Layout from "../components/Layout/Layout";
import GoToTop from "../components/go-to-top";
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
          <GoToTop />
          <Analytics />
          <SpeedInsights />
        </Layout>
      </body>
    </html>
  );
}
