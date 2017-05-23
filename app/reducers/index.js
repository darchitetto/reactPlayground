import {combineReducers} from 'redux';
import * as recipesReducer from './recipes';

//Can have many reducers, for example one for each
//searched recipes
//starred reducer
//Favorite reducers

export default combineReducers(Object.assign(
    recipesReducer,
))