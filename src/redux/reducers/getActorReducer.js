const intialState = {
  actor: {},
  images: {}
}

export default function (state = intialState , action){
  switch (action.type) {
    case 'GET_ACTOR':
      return {
        ...state,
        actor: action.payload.data
      };
    case 'GET_ACTOR_IMAGES':
      return {
        ...state,
        images: action.payload.data
      };
    default:
      return state;
  }
}
