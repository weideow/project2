import { useEffect, useState } from 'react';
import RandomSearch from '../components/RandomRecipe';

function RandomPage() {
    const [recipes, setRecipes] = useState([]);  // Initial state is an empty array

    useEffect(() => {
        const fetchRandom = async () => {
            const apiKey = 'db9d359500414b32a111e5f38326f191';
            const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}    `;

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log('API Response:', data);  
   
                if (Array.isArray(data.recipes)) {
                    setRecipes(data.recipes);
                } else {
                    console.error('Error fetching recipes:');
                    setRecipes([]); 
                }
            } catch (error) {
                console.error('Error fetching random recipes:', error);
                setRecipes([]); 
            }
        };

        fetchRandom();
    }, []);

    return (
        <div>
            <h1>Your surprise for the day!</h1>
            <RandomSearch recipes={recipes} />
        </div>
    );
}

export default RandomPage;
