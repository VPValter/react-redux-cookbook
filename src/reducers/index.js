
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

export default rootReducer;
