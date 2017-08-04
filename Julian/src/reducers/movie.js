const movieReducer = (movies = [], action) => {
  switch(action.type) {
    case 'GET_MOVIE':
      return action.payload.data;
    case 'MOVIE_DETAILS':
      return action.payload.data;
    default:
      return movies;
  }
}

export default movieReducer;