import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }) => {
  return (
    <div className='recipe-list'>
      <p>Or choose one from the list:</p>
      {recipes &&
        recipes.map((item) => <RecipeItem key={item.id} recipe={item} />)}
    </div>
  );
};

export default RecipeList;
