import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Calendar from "./components/Calendar/Calendar";
import Details from "./components/Details/Details";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import './style.css';


function App() {
  return(
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
