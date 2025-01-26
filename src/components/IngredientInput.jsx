import { useState, useEffect } from 'react';

const IngredientInput = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (!ingredients) return;

    const apiKey = 'YOUR_SPOONACULAR_API_KEY';
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Enter Ingredients</h1>
      <input
        type="text"
        placeholder="Enter ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

    
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image}   />
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default IngredientInput;
