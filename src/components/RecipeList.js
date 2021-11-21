import RecipeItem from './RecipeItem';
import { Fragment } from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <Fragment>
      <p>Or choose one from the list:</p>
      <div className='recipe-list'>
        <div className='recipe-item heading'>
          <small>ID:</small>
          <small>Title:</small>
          <small>Source:</small>
          <small>Ingredients:</small>
          <small>view</small>
          <small>delete</small>
        </div>
        {recipes && recipes.map((item) => (
          <RecipeItem key={item.id} recipe={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default RecipeList;
