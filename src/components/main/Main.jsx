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

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4 flex flex-col h-screen">
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul className="flex flex-wrap justify-center">
          {recipe.map(recipe => (
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
