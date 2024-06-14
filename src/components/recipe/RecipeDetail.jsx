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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h2 className='text-3xl font-bold underline text-center mb-4'>{recipe.name}</h2>
        <div className="flex justify-center mb-6">
          <img src={recipe.image} alt={recipe.name} className="max-w-xs h-auto" />
        </div>
        <h3 className='text-2xl font-bold underline mb-2'>Ingredients:</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className='text-2xl font-bold underline mb-2'>Steps:</h3>
        <ol className="list-decimal list-inside">
          {recipe.steps && recipe.steps.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
