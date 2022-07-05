import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import SEO from "../next-seo-config";
import { Layout } from "@/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
