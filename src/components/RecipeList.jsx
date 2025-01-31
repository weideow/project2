const RecipeSearch = ({ recipes }) => {
  return (
    <div>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
              <p>Preparation Time: {recipe.readyInMinutes} minutes</p>
              <p>Servings: {recipe.servings}</p>
              <p>
                <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {recipe.sourceUrl}
                </a>
              </p>
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeSearch;
