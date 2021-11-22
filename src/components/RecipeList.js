import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }) => {
  return (
    <div className='recipe-list'>
      <p>Or choose one from the list:</p>
      <table className='recipe-list'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Source</th>
            <th>Ingr.#</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Prep time</th>
            <th>view</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {recipes &&
            recipes.map((item) => <RecipeItem key={item.id} recipe={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;
