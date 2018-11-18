import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Article from './Components/Article'
import Section from './Components/Section'
import Aside from './Components/Aside'


class App extends Component {
  render() {
    
    return (
      <div>
            <Header/> 
            <Main/>
            <Article/>
            <Section/>
            <Aside/>
      </div>
    );
  }
}

export default App;
