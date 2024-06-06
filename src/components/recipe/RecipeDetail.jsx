import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function RecipeDetail() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { id } = useParams();
  const apiURL = `http://localhost:3001/recipes/${id}`;

  useEffect(() => {
    const getRecipe = async () => {
      setLoading(true);
      
      try {
        const response = await axios.get(apiURL);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="border flex-grow flex flex-col h-screen">
      <h2 className='text-3xl font-bold underline'>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="max-w-xs h-auto" />
      <h3 className='text-2xl font-bold underline'>Ingredients:</h3>
      <ul>
        {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className='text-2xl font-bold underline'>Steps:</h3>
      <ol>
        {recipe.steps && recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
