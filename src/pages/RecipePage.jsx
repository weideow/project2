import { useState } from 'react';
import RecipeSearch from '../components/RecipeList';

const RecipeSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    // Call fetchRecipes only when the form is submitted
    if (searchTerm) {
      const fetchedRecipes = await fetchRecipes(searchTerm);
      setRecipes(fetchedRecipes);
    }
  };

  // Function to fetch recipes (this is now inside the component)
  const fetchRecipes = async (query) => {
    const apiKey = 'db9d359500414b32a111e5f38326f191';
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeInformation=true`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results || []; // Return the fetched recipes
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return [];
    }
  };

  return (
    <div>
      <h1>Search Recipes</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for a recipe"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Pass recipes directly to RecipeSearch component */}
      <RecipeSearch recipes={recipes} />
    </div>
  );
};

export default RecipeSearchPage;
