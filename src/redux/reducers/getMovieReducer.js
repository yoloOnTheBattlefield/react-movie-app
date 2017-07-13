const intialState = {
  movie: {},
  team: {},
  trailers: {},
  similar: {}
}

export default function (state = intialState , action){
  switch (action.type) {
    case 'GET_MOVIE':
      return {
        ...state,
        movie: action.payload.data
      };
      case 'GET_CAST':
        return {
          ...state,
          team: action.payload.data
        };
        case 'GET_MOVIE_TRAILER':
          return {
            ...state,
            trailers: action.payload.data
          }
        case 'GET_SIMILAR':
          return {
            ...state,
            similar: action.payload.data
          }
    default:
      return state;
  }
}
