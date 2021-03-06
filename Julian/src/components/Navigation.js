import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import MovieList from './MovieList'

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>MOVIES!!!</h1>
          <Link to="/">Home</Link>
          <Link to="/movies">MovieList</Link>
          {/* <Link to="/movies/:id">Movie</Link>     */}
      </Nav>
    </div>
  );
};

export default Navigation;