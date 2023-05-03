import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>정진우 | 프론트엔드 개발자 포트폴리오</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
