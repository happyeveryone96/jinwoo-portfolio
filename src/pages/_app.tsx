import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import Nav from "@/components/Nav/Nav";
import { hotjar } from "react-hotjar";
import React, { useEffect } from "react";

const monumentExtended = localFont({
  src: [
    {
      path: "../../public/fonts/PPMonumentExtended-Black.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMonumentExtended-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMonumentExtended-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      hotjar.initialize(3475452, 6);
    }
  }, []);

  return (
    <div className={monumentExtended.className}>
      <Head>
        <title>정진우 | 프론트엔드 개발자 포트폴리오</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}
