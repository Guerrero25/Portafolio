import React, { Component } from 'react';

import './sass/main.css';
import './sass/navbar.css'

import Navbar from './components/navbar';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Main />
      </div>
    );
  }
}

export default App;
