import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Main() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 flex flex-col h-screen">
      <div>
        <ul className="flex flex-wrap justify-center">
          {recipes.map(recipe => (
            <li className='m-4' key={recipe.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[200px]">
                {/* Link zur Detailseite für jedes Rezept */}
                <Link to={`/${recipe.id}`} className='text-m font-semibold break-words bg-gray-800 text-white block'>
                  {recipe.name}
                  {/* Bild des Rezepts */}
                  <img src={recipe.image} alt={recipe.name} className="w-full h-[150px] object-cover" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}