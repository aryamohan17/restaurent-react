import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { restReducer } from '../reducers/restaurentReducer';

// create reducer
const reducer = combineReducers({
    restaurantReducer:restReducer
})
// middleware
const middleware=[thunk]

// create store
const store = createStore(reducer,applyMiddleware(...middleware))

export default store