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
            <meta
              property="og:title"
              content="Portfolio - Thales"
              key="ogtitle"
            />
            <meta
              property="og:description"
              content="Thales Ludwig's portfolio"
              key="ogdescription"
            />
            <meta property="og:image" content="/meta/thumb.jpg" key="ogimage" />
            <meta
              property="og:image:type"
              content="image/jpeg"
              key="ogimagetype"
            />
            <meta
              property="og:image:alt"
              content="Web developer and remote lifestyle enthusiast."
              key="ogimagealt"
            />
            <meta
              property="og:url"
              content="https://thalesludwig.vercel.app/"
              key="ogurl"
            />

            <meta itemprop="name" content="Thales Ludwig" key="propname" />
            <meta
              itemprop="description"
              content="Thales Ludwig's portfolio"
              key="propdesc"
            />
            <meta itemprop="image" content="/meta/thumb.jpg" key="propimage" />

            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:title" content="Thales Ludwig" key="twtitle" />
            <meta
              name="twitter:description"
              content="Thales Ludwig's portfolio"
              key="twdescription"
            />
            <meta
              name="twitter:image"
              content="/meta/thumb.jpg"
              key="twimage"
            />
            <meta name="image" content="/meta/thumb.jpg" key="nameimage" />
            <meta name="og:image" content="/meta/thumb.jpg" key="nameogimage" />
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
