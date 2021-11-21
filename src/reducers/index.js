// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
// all the reducers go here:
// });

const initialState = {
  recipes: JSON.parse(localStorage.getItem('storedRecipes')) || [],
  // recipe:
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  payload && localStorage.setItem(
    'storedRecipes',
    JSON.stringify([...state.recipes, payload])
  );

  switch (type) {
    case 'ADD_RECIPE':
      return {
        // ...state,
        recipes: [...state.recipes, payload],
      };
    default:
      return state;
  }
};

// ACTIONS:
// const addRecipe = { type: 'ADD_RECIPE', payload: 'test-add-recipe' };

// DISPATCH (TEMP***)
// store.dispatch(addRecipe);

export default rootReducer;
