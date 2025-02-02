// CurrentIngredient.jsx

import { useState, useEffect } from 'react';
import IngredientSearch from '../components/IngredientInput';

const IngredientPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredient, setIngredient] = useState([]);
  const [airtableIngredients, setAirtableIngredients] = useState([]);

  const token = 'patki52lS0oVzwcUT.4d184b8ceaea3b5b3fbfc9639ee0ab1c8c1510b647f4d874a3f9f970a4227250';
  const airUrl = 'https://api.airtable.com/v0/appHMbk1LeVWZTeRN/Table%201';

  useEffect(() => {
    const fetchAirtableIngredients = async () => {
      try {
        const response = await fetch(airUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setAirtableIngredients(data.records || []);
      } catch (error) {
        console.error('Error fetching Airtable ingredients:', error);
      }
    };

    fetchAirtableIngredients();
  }, []);

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
      const fetchedIngredientsList = await fetchedIngredients(searchTerm);
      setIngredient(fetchedIngredientsList);
    }
  };

  // Function to remove an ingredient from Airtable
  const removeIngredientFromAirtable = async (ingredientId) => {
    const deleteUrl = `https://api.airtable.com/v0/appHMbk1LeVWZTeRN/Table%201/${ingredientId}`;

    try {
      const response = await fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const updatedIngredients = airtableIngredients.filter(
          (ingredient) => ingredient.id !== ingredientId
        );
        setAirtableIngredients(updatedIngredients);  // Update the local state to reflect the removal
        console.log('Ingredient removed from Airtable');
      } else {
        console.error('Error removing ingredient:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing ingredient from Airtable:', error);
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

      <IngredientSearch ingredient={ingredient} />

      <h2>Ingredients list</h2>
      <ul>
        {airtableIngredients.length > 0 ? (
          airtableIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              <h3>{ingredient.fields.Name}</h3>
              <button onClick={() => removeIngredientFromAirtable(ingredient.id)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>No ingredients found in Airtable.</p>
        )}
      </ul>
    </div>
  );
};

export default IngredientPage;
