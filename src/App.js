import React from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom"
import "./style.scss"
import CustomProvider from './components/CustomProvider';
import { ToastContainer, toast } from "react-toastify"


function App() {

  return (
    <>
      <CustomProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
        <ToastContainer />
      </CustomProvider>
    </>
  );
}

export default App;
