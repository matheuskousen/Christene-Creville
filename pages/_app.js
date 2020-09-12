import Head from "next/head";
import App from "next/app";
import { GlobalStyle } from "../style/style";
import Navbar from "../src/components/Navbar";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Christene Creville</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/site.webmanifest" />
        </Head>
        <Navbar />
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}
