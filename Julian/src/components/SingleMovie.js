import React, {Component} from 'react';
import { connect } from 'react-redux';
import { movieDetails } from '../actions';
import { bindActionCreators } from 'redux'


class SingleMovie extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.movieDetails(this.props.match.params.id)
  }

  render() {
    if (this.props.movies === null) {
      return null;
    }

    return (
      <div key={this.props.movie.id}>
        <h1>{`Title: ${this.props.movie.title}`}</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}

export default connect(mapStateToProps, { movieDetails })(SingleMovie);