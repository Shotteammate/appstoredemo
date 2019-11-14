import { FETCH_RECOMMENDED, FETCH_APPLIST, SET_SCROLLING_FALSE, SET_SCROLLING_TRUE } from '../actions/types';

const initialState = {
  recommendedList: [],
  appList: [],
  loaded: false,  // react loader
  isScrolling: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDED:
      return {
        ...state,
        recommendedList: action.payload,
        loaded: true
      };
    case FETCH_APPLIST:
      return {
        ...state,
        appList: action.payload,
        loaded: true
      };
    case SET_SCROLLING_FALSE:
      return {
        ...state,
        isScrolling: action.payload //reset to false
      };
    case SET_SCROLLING_TRUE:
      return {
        ...state,
        isScrolling: action.payload //set to true
      };
    default:
      return state;
  }
}

export default rootReducer;