const intialState = {
  type: '',
  results: []
}

export default function (state = intialState, action){
  switch (action.type) {
    case 'FETCH_UPCOMING_MOVIES':
      return {
        ...state,
        type: 'UPCOMING',
        results: action.payload.data.results
      };
    default:
      return state;
  }
}
