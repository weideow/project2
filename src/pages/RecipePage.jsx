//RecipePage.jsx

import RecipeSearch from "../components/RecipeList";
import { useState } from 'react';

const RecipeSearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      
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
        <RecipeSearch searchTerm={searchTerm} />
      </div>
    );
  };
  
  export default RecipeSearchPage;
