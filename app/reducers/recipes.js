import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchRecipes = createReducer({},{
        //off action is your object defined in setSearchedRecipes
        [types.SET_SEARCHED_RECIPES](state,action){
            //defined the new reduced state
            let newState = {};

            action.recipes.forEach((recipe) => {
                //grab an array, and then store it in a hsahmap
                newState [recipe.jobNumber] = recipe
            });

            return newState;
        }
    }
);

//first param is the default value (0 in this case)
export const recipeCount = createReducer(0,{
    //we transform the state, listen for transformation from the action add recipe
    //returns a new data structure, the state is actually immutable
    [types.ADD_RECIPE](state,action) {  //this line says listen for this type of action
        return state + 1;
    },
    [types.SET_SEARCHED_RECIPES](state,action) {  //this line says listen for this type of action
        return action.recipes.length;
}
})