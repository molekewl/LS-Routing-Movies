import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Movie } from './components';
import { Route } from 'react-router-dom';
import MovieList from './components/MovieList';
// import { SingleMovie } from './components'

const App = () => (
  <div>
    <Navigation />
      <Route exact path="/" component={Movie}/>
      <Route exact path='/movies' component={MovieList}/>
      {/* <Route path="/movies" component={SingleMovie}/>    */}

  </div>
)

export default App;
