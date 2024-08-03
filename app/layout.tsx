import { Alegreya } from "next/font/google";
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
          <Layout className={alegreya.className}>{children}</Layout>
      </body>
    </html>
  );
}