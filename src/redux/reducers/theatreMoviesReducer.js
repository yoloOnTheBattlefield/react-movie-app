const intialState = {
  type: '',
  results: []
}

export default function (state = intialState, action){
  switch (action.type) {
    case 'FETCH_IN_THEATRES':
      return {
        ...state,
        type: 'IN THEATRES',
        results: action.payload.data.results
      };
    default:
      return state;
  }
}
