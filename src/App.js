import React from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom"
import "./style.scss"
import CustomProvider from './components/CustomProvider';


function App() {

  return (
    <>
      <CustomProvider>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </CustomProvider>
      <Footer />
    </>
  );
}

export default App;
