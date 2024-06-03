import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Main() {
  const [recipe, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const getRecipes = async () => {
    setLoading(true);
    const apiURL = "http://localhost:3001/recipes"
    try {
      const response = await axios.get(apiURL);
      setRecipes(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  console.log(recipe);

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="border flex-grow">
      <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
          {recipe.map(recipe => (
            <li className='p-2' key={recipe.id}>
              {/* Link zur Detailseite für jedes Rezept */}
              <Link to={`/${recipe.id}`} className='border block bg-cyan-600'>
                {recipe.name}
              </Link>
              {/* Bild des Rezepts */}
              <img src={recipe.image} alt={recipe.name} className="max-w-xs h-auto" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
