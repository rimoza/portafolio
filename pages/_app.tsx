import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { Alegreya } from "@next/font/google";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={alegreya.className}>
      <main>
      <Component {...pageProps} />
      </main>
    </Layout>
  );
}
