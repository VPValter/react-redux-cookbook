const initialState = {
  recipes: JSON.parse(localStorage.getItem('storedRecipes')) || [],
  // recipes: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_RECIPE':
      localStorage.setItem(
        'storedRecipes',
        JSON.stringify([...state.recipes, payload])
      );
      return {
        // ...state,
        recipes: [...state.recipes, payload],
      };
    case 'DELETE_RECIPE':
      localStorage.setItem(
        'storedRecipes',
        JSON.stringify(state.recipes.filter((item) => item.id !== payload))
      );
      return {
        recipes: state.recipes.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
