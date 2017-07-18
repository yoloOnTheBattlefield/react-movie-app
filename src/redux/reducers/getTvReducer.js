const intialState = {
  tv: {},
  team: {},
  trailers: {},
  similar: {}
}

export default function (state = intialState , action){
  switch (action.type) {
    case 'GET_TV':
      return {
        ...state,
        tv: action.payload.data
      };
      case 'GET_TV_CAST':
        return {
          ...state,
          team: action.payload.data
        };
        case 'GET_TV_TRAILER':
          return {
            ...state,
            trailers: action.payload.data
          }
        case 'GET_TV_SIMILAR':
          return {
            ...state,
            similar: action.payload.data
          }
    default:
      return state;
  }
}
