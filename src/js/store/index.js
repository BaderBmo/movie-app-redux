// src/js/store/index.js

import { createStore } from "redux";
import { combineReducers }from 'redux'

import addReducer from "../reducers/index";
import rateReducer from '../reducers/rateReducer'
import serachReducer from '../reducers/titleReducer'



const reducer = combineReducers({
    addReducer,
    redTwo : serachReducer,
    redThree : rateReducer
})

const store = createStore(  reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;