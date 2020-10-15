import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Calendar from "./components/Calendar/Calendar";
import Details from "./components/Details/Details";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import './style.css';
import FetchData from "./service/FetchData";
import { findDOMNode } from 'react-dom';

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
  };

  componentDidMount(){
    this.upDateRocket();
  }

  upDateRocket(){
    this.fetchData.getRocket()
    .then(data => { 
      this.setState({rockets: data.map(item => item.name)})
      return data})
    .then(data => data.find(item => item.name === this.state.rocket))
    .then(rocketFeatures => this.setState({rocketFeatures}));
  }

changeRocket = rocket => {
  this.setState({
      rocket
  }, this.upDateRocket)
}

  render() {
    console.log(this.state)
    return(
      <React.Fragment>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        <Main rocket={this.state.rocket}/>
        <Features />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
