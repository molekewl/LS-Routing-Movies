import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Home } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
     <Route exact path="/" component={Home}/> 
  </div>
)

export default App;
