import {combineReducers} from 'redux';
import recommendReducer from './recommendReducer';

export default combineReducers({
  recommendRD: recommendReducer,
});
