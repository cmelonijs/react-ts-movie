import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../layout/Header";
import Body from "../layout/Body";
import Footer from "../layout/Footer";

const AppContainer = () => {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Body />
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
};

export default AppContainer;
