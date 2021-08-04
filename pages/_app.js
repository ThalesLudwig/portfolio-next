import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import Header from "../components/Header";
import { light } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Head>
          <title>Thales Ludwig</title>
          <meta name="description" content="Thales' Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
