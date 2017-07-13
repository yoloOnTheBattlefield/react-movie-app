import {
  UPDATE_INPUT_VALUE,
  CLEAR_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN,
  UPDATE_SUGGESTIONS,
} from '../constants';

const initialState = {
  value: '',
  suggestions: [],
  isLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        value: action.value
      };

    case CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: []
      };

    case LOAD_SUGGESTIONS_BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case UPDATE_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload.data.results,
        isLoading: false
      };

    default:
      return state;
  }
}
