import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

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

        // fontFamily: "IBM Plex Sans KR, sans-serif",

        headings: {
          sizes: {
            h1: { fontSize: 34, lineHeight: 1.8, fontWeight: 700 },
          },
        },

        shadows: {
          md: "1px 1px 3px rgba(0, 0, 0, .25)",
          xl: "5px 5px 3px rgba(0, 0, 0, .25)",
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
      <Component {...pageProps} />
    </MantineProvider>
  );
}
