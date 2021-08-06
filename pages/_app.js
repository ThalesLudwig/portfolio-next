import "../styles/globals.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import { light } from "../styles/theme";

const GlobalStyle = createGlobalStyle``;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
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
        <Content>
          <Main>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Main>
          <Chat />
        </Content>
      </ThemeProvider>
    </>
  );
}
