import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  <div>
    <Navigation />
    <Route exact path='/' component={Home}/>
    <Route exact path='/test' component={test}/>
  </div>
}

export default App;
