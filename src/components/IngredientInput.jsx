// IngredientInput.jsx

import { useState } from "react";

const token = 'patki52lS0oVzwcUT.4d184b8ceaea3b5b3fbfc9639ee0ab1c8c1510b647f4d874a3f9f970a4227250';

function IngredientSearch({ ingredient }) {
  const [addedIngredientId, setAddedIngredientId] = useState(null);

  const postAirtable = async (ingredientName, ingredientId) => {
    const airUrl = 'https://api.airtable.com/v0/appHMbk1LeVWZTeRN/Table%201';
    const airData = {
      fields: {
        "Name": ingredientName,
        "Id": ingredientId,
      },
    };

    try {
      const response = await fetch(airUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(airData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Ingredient added to Airtable:", data);
        setAddedIngredientId(true);
      } else {
        console.error("Error adding ingredient:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting to Airtable:", error);
    }
  };

  return (
    <div>
      <ul>
        {ingredient.length > 0 ? (
          ingredient.map((ingredients) => ( 
            <li key={ingredients.id}>
              <h2>{ingredients.name}</h2>
              <p>
                {/* <img src={ingredients.image} /> */}
              </p>
              <button onClick={() => postAirtable(ingredients.name, ingredients.id)}>
              {addedIngredientId === ingredients.id ? 'Ingredient Added!' : 'Add'}
              </button>
            </li>
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
}

export default IngredientSearch;
