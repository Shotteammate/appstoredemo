import { FETCH_RECOMMENDED, FETCH_APPLIST } from '../actions/types';

const initialState = {
  recommendedList: [],
  appList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDED:
      return {
        ...state,
        recommendedList: action.payload
      };
    case FETCH_APPLIST:
      return {
        ...state,
        appList: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;