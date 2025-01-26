import React, { useState } from 'react';

const RecipeSearch = () => {

    const [recipes, setRecipes] = useState([])

    const handleSearch = async() => {
  
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=1b51a82d73074cc583198a8ccf773be4`;
   
  try {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.results);

  } catch (error){
    console.error('Error fetching data:', error)

  }
}



return (
<div>
    

</div>

)

};
export default RecipeSearch;