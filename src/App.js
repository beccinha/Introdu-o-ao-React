import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './pages/Main';
import Routes from './routes';

import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
