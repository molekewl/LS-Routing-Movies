import React, {Component} from 'react';
import { connect } from 'react-redux';
import { movieDetails } from '../actions';

class SingleMovie extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.movieDetails(0);
    console.log(this.props)
  }

  render() {
    return (
      <div>
        {/* <ul>
          {this.props.movie.map((movie, i) => {
            return (
              <li key={i}>
                <p>{`Title: ${movie.title}`} </p>
                <p>{`Director: ${movie.director}`} </p>
                <p>{`Title: ${movie.metascore}`} </p>
                <p>{`Stars: ${movie.stars}`} </p>
              </li>
            );
          })}
        </ul> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}

export default connect(mapStateToProps, { movieDetails })(SingleMovie);