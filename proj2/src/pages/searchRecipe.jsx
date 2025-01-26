// import { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router";
// import RecipeService from './RecipeService'; 


// const recipeSearch = () => {
//     const [recipes, setRecipes] = useState([])

//     useEffect(() => {

//         const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=1b51a82d73074cc583198a8ccf773be4`;

//         fetch(url)
//         .then(response => response.json())
//         .then(data => {
//           setRecipes(data.results);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setLoading(false);
//         });
//     }, []);
  
//     return (
//       <div>
//         <h1>Recipes</h1>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <ul>
//             {recipes.map(recipe => (
//               <li key={recipe.id}>
//                 <h2>{recipe.title}</h2>
//                 <img src={recipe.image} alt={recipe.title} />
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };
  
//   export default recipeSearch;