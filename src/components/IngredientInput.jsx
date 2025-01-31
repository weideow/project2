const IngredientSearch = ({ ingredient }) => {
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
            </li>
          ))
        ) : (
          <p>No ingredient found.</p>
        )}
      </ul>
    </div>
  );
};

export default IngredientSearch;
