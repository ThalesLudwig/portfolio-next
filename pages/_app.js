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

const MainProvider = ({ children }) => {
  console.log("process.browser", process.browser);
  return process.browser ? (
    <Provider store={store}>
      <PersistGate loading="Loading" persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  ) : (
    <Provider store={store}>{children}</Provider>
  );
};

function App({ Component, pageProps }) {
  const description =
    "Thales' Portfolio. Full-stack software engineer, UI/UX Designer, and remote lifestyle enthusiast. I am an always-learning machine that converts energy drinks into clean and scalable code.";
  const title = "Thales Ludwig";
  const image = "https://i.ibb.co/PgmvPZD/IMG-0246-2.jpg";

  return (
    <MainProvider>
      <ConnectedTheme>
        <Head>
          {/* HTML Meta Tags */}
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta charSet="utf-8" />

          {/* Google / Search Engine Tags */}
          <meta itemprop="name" content={title} />
          <meta itemprop="description" content={description} />
          <meta itemprop="image" content={image} />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://thalesludwig.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:image:secure_url" content={image} />
          <meta property="og:image:width" content="720" />
          <meta property="og:image:height" content="690" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
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
    </MainProvider>
  );
}

export default App;
