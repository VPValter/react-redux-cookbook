import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RecipeList from './RecipeList';
import { Fragment } from 'react';

const Home = () => {
  const allRecipes = useSelector((state) => state.recipes);

  return (
    <Fragment>
      <small>welcome to</small>
      <h1>Vlad's Cookbook</h1>
      <hr />
      <Link to='/create' className='btn btn-primary'>
        Add a new recipe
      </Link>

      {allRecipes && allRecipes.length ? (
        <RecipeList recipes={allRecipes} />
      ) : null}
    </Fragment>
  );
};

export default Home;
