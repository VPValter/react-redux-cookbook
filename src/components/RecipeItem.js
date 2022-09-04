import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  const truncIngredients = recipe?.ingredients.slice(0, 3);
  const truncInstructions = recipe?.instructions.substring(0, 50);
  const hours = Math.floor(recipe?.prepTime / 60);
  const minutes = recipe?.prepTime % 60;

  const dispatch = useDispatch();

  const handleDelete = (id, title) => {
    if (
      window.confirm(`Are you sure you want to delete the recipe: ${title}?`)
    ) {
      dispatch({
        type: 'DELETE_RECIPE',
        payload: id,
      });
    }
  };

  return (
    <div className='recipe-item'>
      <small className='id'>{recipe.id}</small>
      <strong>{recipe.title}</strong>
      {recipe.source ? (
        <>
          <small>Source:</small>
          <span>{recipe.source}</span>
        </>
      ) : (
        ''
      )}
      <div className='ingredients-list'>
        <small>Ingredients:</small>
        <div>
          {truncIngredients.map((item, i) => (
            <span key={item.name}>
              {item.name}
              {i < truncIngredients.length - 1 && ', '}
            </span>
          ))}
          {recipe.ingredients.length > 3 && '...'}
        </div>
      </div>
      {recipe.instructions ? (
        <>
          <small>Instructions:</small>
          <p>
            {recipe.instructions.length > 50
              ? truncInstructions.substring(
                  0,
                  truncInstructions.lastIndexOf(' ')
                ) + '...'
              : recipe.instructions}
          </p>
        </>
      ) : (
        ''
      )}

      {recipe.prepTime ? (
        <>
          <small>Prep time:</small>
          <p>
            {recipe.prepTime > 59
              ? `${hours} hrs ${minutes} min`
              : `${recipe.prepTime} min`}
          </p>
        </>
      ) : (
        ''
      )}

      <p>
        <Link className='cta btn btn-primary' to={`/show/${recipe.id}`}>
          view
        </Link>
      </p>
      <p>
        <span
          className='cta danger link'
          onClick={() => handleDelete(recipe.id, recipe.title)}
        >
          delete
        </span>
      </p>
    </div>
  );
};

export default RecipeItem;
