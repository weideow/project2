import RecipeSearch from "../components/RecipeSearch";
import { useState } from 'react';

const RecipeSearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      // Perform search logic, or pass the search term to the RecipeSearch component
    };
  
    return (
      <div>
        <h2>Search Recipes</h2>
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
