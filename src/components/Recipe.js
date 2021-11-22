import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Recipe = () => {
  const params = useParams();
  const allRecipes = useSelector((state) => state.recipes);
  const currentRecipe = allRecipes.filter((recipe) => recipe.id === params.id);
  const recipe = currentRecipe[0];
  const hours = Math.floor(recipe.prepTime / 60);
  const minutes = recipe.prepTime % 60;

  return (
    <div className='recipe-details'>
      <h1>{recipe.title}</h1>
      <div className='left'>
        {recipe.source && <small>from: {recipe.source} </small>}
        <hr />
        <strong>Ingredients:</strong>
        <ul>
          {recipe.ingredients.map((item) => (
            <li key={item.name}>
              {item.name}, {item.qty}
            </li>
          ))}
        </ul>
        <hr />
        <strong>Preparation time:</strong>
        <p>
          {recipe.prepTime > 59
            ? `${hours} hours ${minutes} minutes`
            : `${recipe.prepTime} minutes`}
        </p>
        <button className='btn btn-danger'>Delete recipe</button>
        <small>
          <Link to='/'>{'<  '}return to home</Link>
        </small>
      </div>
      <div className='right'>
        <strong>Prepatarion instructions:</strong>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
