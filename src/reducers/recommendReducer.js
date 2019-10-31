import { FETCH_RECOMMENDED } from '../actions/types';

const initialState = {
  recommendedList: []
};

const recommendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDED:
      return {
        ...state,
        recommendedList: action.payload
      }
    default:
      return state;
  }
}

export default recommendReducer;