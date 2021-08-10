import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import { Content, Main } from "../styles/pages/AppPage";
import ConnectedTheme from "../components/ConnectedTheme";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../config/store";
import { Provider } from "react-redux";
import IntlProvider from "../components/IntlProvider";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading="Loading" persistor={persistor}>
        <ConnectedTheme>
          <Head>
            <title>Thales Ludwig</title>
            <meta name="description" content="Thales' Portfolio" />
            <link rel="icon" href="/meta/icon.png" />
            <meta name="twitter:card" content="summary" />
            <meta property="og:title" content="Portfolio - Thales" />
            <meta
              property="og:description"
              content="Thales Valentini's portfolio"
            />
            <meta property="og:image" content="/meta/thumb.jpg" />
            <meta
              property="og:image:alt"
              content="Web developer and remote lifestyle enthusiast."
            />
            <meta
              property="og:url"
              content="https://thalesludwig.vercel.app/"
            />
          </Head>
          <IntlProvider>
            <Content>
              <Main>
                <Header />
                <Component {...pageProps} />
                <Footer />
              </Main>
              <Chat />
            </Content>
          </IntlProvider>
        </ConnectedTheme>
      </PersistGate>
    </Provider>
  );
}

export default App;
