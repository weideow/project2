 function RandomSearch ({ recipes = [] }) {
    return (
        <div>
            {(recipes.map((recipe) =>(
                <li key={recipe.id}>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image}/>
                    <p>Preparation Time: {recipe.readyInMinutes}</p>
                    <p>Servings: {recipe.servings}</p>
                    <p>
                    <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                    {recipe.sourceUrl}
                    </a>
                    </p>
                </li>)
            )

            )}
        </div>
    )

 };


 export default RandomSearch;