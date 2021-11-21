import RecipeItem from './RecipeItem';
import { Fragment } from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <Fragment>
      <p>Or choose one from the list:</p>
      <table className='recipe-list'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Source</th>
            <th>Ingredients #</th>
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
    </Fragment>
  );
};

export default RecipeList;
