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

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading="Loading" persistor={persistor}>
        <ConnectedTheme>
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
        </ConnectedTheme>
      </PersistGate>
    </Provider>
  );
}

export default App;
