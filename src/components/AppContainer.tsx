import React from "react";
import Header from "../layout/Header";
import Body from "../layout/Body";
import Footer from "../layout/Footer";

const AppContainer = () => {
    return (
        <>
            <React.StrictMode>
                <Header />
                <Body />
                <Footer />
            </React.StrictMode>
        </>
    )
}

export default AppContainer;    