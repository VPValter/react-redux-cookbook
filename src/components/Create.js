import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [recipesData, setRecipesData] = useState({
    title: '',
    source: '',
    ingredients: [],
  });
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const { title, source } = recipesData;

  const handleChange = (e) =>
    setRecipesData({
      ...recipesData,
      [e.target.name]: e.target.value,
    });

  const addIngredient = (e) => {
    let qty = prompt('Please enter quantity for: ' + e.target.value);
    if (qty && e.target.value) {
      setSelectedIngredients([
        ...selectedIngredients,
        { name: e.target.value, qty },
      ]);
    }
    // setRecipesData({ ...recipesData, ingredients: selectedIngredients });
    // doesnt work, had to hack through the payload
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIngredients.length) {
      // dispatch({ type: 'ADD_RECIPE', payload: recipesData });
      dispatch({
        type: 'ADD_RECIPE',
        payload: { ...recipesData, id: v4(), ingredients: selectedIngredients },
      });
      navigate('/');
    } else {
      alert('There must be at least one ingredient chosen.');
    }
  };

  const ingredients = [
    'flour',
    'milk',
    'oil',
    'salt',
    'sugar',
    'eggs',
    'tomatoes',
    'peppers',
    'cheese',
    'potatoes',
    'meat',
  ];

  return (
    <div className='create'>
      <small>
        <Link to='/'>{'<  '}return to home</Link>
      </small>
      <h2>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type='text'
          name='title'
          required
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <label>Source:</label>
        <input
          type='text'
          name='source'
          value={source}
          onChange={(e) => handleChange(e)}
        />
        <label>Ingredients:</label>
        {selectedIngredients.map((item) => (
          <span key={item.name} className='ingredient pill'>
            {item.name}, {item.qty}
          </span>
        ))}
        <select
          name='ingredients'
          id='ingredients'
          onChange={(e) => addIngredient(e)}
        >
          <option value=''>Select ingredients from the list:</option>
          {ingredients.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button className='btn btn-success'>Submit</button>
      </form>
    </div>
  );
};

export default Create;
