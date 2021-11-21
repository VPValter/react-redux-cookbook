const RecipeItem = ({ recipe }) => {
  return (
    <div className='recipe-item'>
      <small>{recipe.id}</small>
      <h2>{recipe.title}</h2>
      {/* {recipe.source && <p>{recipe.source}</p>} */}
      <p>{recipe.source}</p>
      <div className='ingredients-list'>
        {recipe.ingredients.map((item) => (
          <span key={item.name}>
            {item.name}
            {', '}
          </span>
        ))}
      </div>
      <span>view</span>
      <span>delete</span>
    </div>
  );
};

export default RecipeItem;
