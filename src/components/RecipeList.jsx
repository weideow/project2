// RecipeList.jsx
import { useState } from 'react';

const RecipeSearch = () => {

  const [recipes, setRecipes] = useState([]);
 

  const handleSearch = async (query) => {
    if (!query) return; // Do not search if query is empty

    const apiKey = '1b51a82d73074cc583198a8ccf773be4';
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${query}&addRecipeInformation=true`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.results); // Update the recipes state with the fetched data
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } 
   
  };

  handleSearch();
 
  return (
    <div>
      {/* <h1>Search Recipes</h1> */}
      {/* <input
        type="text"
        placeholder="Enter ingredients"
        // value={query} //does not change the query directly
        onChange={(e) => setQuery(e.target.value)} // Set query when user types
      />
      <button onClick={handleSearch}>Search</button> */}

 

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} />
           
            <p>Preparation Time: {recipe.readyInMinutes}</p>
            <p>Servings: {recipe.servings}</p>
            <p>
            <a href={recipe.sourceUrl} target="_blank" >
                 {recipe.sourceUrl}
            </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;