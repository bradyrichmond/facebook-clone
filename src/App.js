import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
