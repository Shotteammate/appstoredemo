import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const saveTolocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('saveTolocalStorage error: ', err);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    
    if (serializedState === null ) return undefined;
    return JSON.parse(serializedState);

  } catch (err) {
    console.log('loadFromLocalStorage error: ', err);
    return undefined;
  }
}

const initialState = loadFromLocalStorage();
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware, logger)
);

store.subscribe(() => saveTolocalStorage(store.getState()));

export default store;