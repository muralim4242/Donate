import React, { Component } from 'react';
//import logo from '../images/logo.svg';
//import '../styles/App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Middle from '../components/middle/Middle';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/><br></br><br></br>
      <br></br><br></br>
        <Middle/><br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
      { this.props.children }

      <Footer/>

      </div>
    );
  };
}

export default App;
