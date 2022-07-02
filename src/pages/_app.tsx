import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next/types";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
}) as NextPage<AppProps>;

