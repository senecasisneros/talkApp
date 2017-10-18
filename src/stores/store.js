import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import locationReducer from '../reducers/locationReducer';
import commentReducer from '../reducers/commentReducer';

var store;

export default {

  configureStore: () => {
    const reducers = combineReducers({
      location: locationReducer,
      comment: commentReducer
    })

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )

    return store
  },

  currentStore: () => {
    return store
  }
}
