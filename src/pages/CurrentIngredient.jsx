import { useState } from 'react';
import IngredientSearch from '../components/IngredientInput';

const IngredientPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredient, setIngredient] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const fetchedIngredients = async (query) => {
    const apiKey = 'db9d359500414b32a111e5f38326f191';
    const url = `https://api.spoonacular.com/food/ingredients/search?apiKey=${apiKey}&query=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results || []; 
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      return [];
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      const fetchedIngredientslist = await fetchedIngredients(searchTerm);
      setIngredient(fetchedIngredientslist);
    }
  };

  return (
    <div>
      <h1>Search Ingredients</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for an ingredient"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Pass recipes directly to RecipeSearch component */}
      <IngredientSearch ingredient={ingredient} />
    </div>
  );
};

export default IngredientPage;
