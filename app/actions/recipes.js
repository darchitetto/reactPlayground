import * as types from './types'

export function addRecipe() {
    return{
        type: types.ADD_RECIPE
    }

}

export function setSearchedRecipes ({recipes}){
    return {
        type: types.SET_SEARCHED_RECIPES,
        recipes
    }
}

export function fetchRecipes (ingredients){
    //dispatch will send the messsage out to the app
    //get state will give access to the entire state of the app at the time this is called
    return (dispatch, getState) => {

        fetch('http://localhost:8080/api/jobs')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                dispatch(setSearchedRecipes({recipes: responseData}))
                return responseData;
            })
            .done();


    }
}