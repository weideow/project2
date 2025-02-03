

const DeleteButton = ({ ingredientId, removeIngredient }) => {
  return (
    <button onClick={() => removeIngredient(ingredientId)}>
      Remove
    </button>
  );
};

export default DeleteButton;
