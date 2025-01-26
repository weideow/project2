import { useState, useEffect } from 'react';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (!query) return;

    const apiKey = 'YOUR_SPOONACULAR_API_KEY';
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Search Recipes</h1>
      <input
        type="text"
        placeholder="Enter ingredients"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

     
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default RecipeSearch;