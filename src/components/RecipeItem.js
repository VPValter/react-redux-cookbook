const RecipeItem = ({ recipe }) => {
  return (
    <tr className='recipe-item'>
      <td className='id'>{recipe.id}</td>
      <td>{recipe.title}</td>
      <td>{recipe.source}</td>
      <td>{recipe.ingredients.length}</td>
      <td className='ingredients-list'>
        {recipe.ingredients.map((item) => (
          <span key={item.name}>
            {item.name}
            {', '}
          </span>
        ))}
      </td>
      <td>{recipe.instructions}</td>
      <td>{recipe.prepTime} min</td>
      <td>view</td>
      <td>delete</td>
    </tr>
  );
};

export default RecipeItem;
