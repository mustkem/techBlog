

import "bootstrap/dist/css/bootstrap.min.css";
import "draft-js/dist/Draft.css";
import '../styles/globals.css';
import "../styles/App.scss";
import "../styles/prism.css";

import "../styles/style.scss"

import { wrapper } from "../Store/store";

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
