import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/jeanbispo/reey-font@1.10/stylesheet.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        />
      </Helmet>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
