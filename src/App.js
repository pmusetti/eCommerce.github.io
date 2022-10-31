import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom"


import "./style.scss"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
