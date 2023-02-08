import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { Alegreya } from "@next/font/google";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className={alegreya.className}>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ThemeProvider>
  );
}
