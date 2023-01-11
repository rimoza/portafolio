import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { Alegreya } from "@next/font/google";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={alegreya.className}>
      <Component {...pageProps} />
      </main>
    </Layout>
  );
}
