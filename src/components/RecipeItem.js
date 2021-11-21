import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  const truncIngredients = recipe.ingredients.slice(0, 3);
  const truncInstructions = recipe.instructions.substring(0, 50);
  const hours = Math.floor(recipe.prepTime / 60);
  const minutes = recipe.prepTime % 60;

  return (
    <tr className='recipe-item'>
      <td className='id'>{recipe.id}</td>
      <td>{recipe.title}</td>
      <td>{recipe.source}</td>
      <td>{recipe.ingredients.length}</td>
      <td className='ingredients-list'>
        {truncIngredients.map((item, i) => (
          <span key={item.name}>
            {item.name}
            {i < truncIngredients.length - 1 && ', '}
          </span>
        ))}
        {recipe.ingredients.length > 3 && '...'}
      </td>
      <td>
        {recipe.instructions.length > 50
          ? truncInstructions.substring(0, truncInstructions.lastIndexOf(' ')) +
            '...'
          : recipe.instructions}
      </td>
      <td>
        {recipe.prepTime > 59
          ? `${hours} hrs ${minutes} min`
          : `${recipe.prepTime} min`}
      </td>
      <td><Link to={`/show/${recipe.id}`}>view</Link></td>
      <td>delete</td>
    </tr>
  );
};

export default RecipeItem;
