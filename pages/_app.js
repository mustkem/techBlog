import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "draft-js/dist/Draft.css";
import "../styles/globals.css";
import "../styles/App.scss";
import "../styles/prism.css";

import "../styles/style.scss";

import { wrapper } from "../Store/store";

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QXHL6M26VS"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if(typeof window !== "undefined"){
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  dataLayer.push(arguments);
                }
                gtag("js", new Date());
          
                gtag("config", "G-QXHL6M26VS");
                  `,
          }}
        ></script>

        <script
          data-ad-client="ca-pub-5997663512783240"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
