import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions';
import { Link } from 'react-router-dom';

// <Link to= {`/movies/${this.props.movie[i].id}`}> {this.props.movie[i].title} </Link>
class MovieList extends Component {

  componentDidMount(){
    this.props.getMovie();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.movie.map((movie, i) => {
            return (
              <Link to= {`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}

export default connect(mapStateToProps, { getMovie })(MovieList)