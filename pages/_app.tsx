import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        colors: {
          // Add your color
          deepBlue: ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
          // or replace default theme color
          blue: ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
        },

        fontSizes: {
          xs: 12,
          sm: 14,
          md: 16,
          lg: 22,
          xl: 26,
        },

        lineHeight: 1.6,

        headings: {
          sizes: {
            h1: { fontSize: 34, lineHeight: 1.8, fontWeight: 700 },
          },
        },

        shadows: {
          sm: "rgb(17 0 0 / 29%) 2px 2px 8px 0px, rgb(39 39 39 / 79%) 7px -5px 10px -11px",
          md: "1px 1px 3px rgba(0, 0, 0, .25)",
          lg: "drop-shadow(rgba(0, 0, 0, 0.8) 2px 4px 6px)",
          xl: "linear-gradient(to top, rgba(0, 0, 0, 0.682), rgba(0, 0, 0, 0.3))",
        },

        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}
    >
      <Head>
        <title>Bora Kim, Front-end Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
