async function index() {
    const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=1b51a82d73074cc583198a8ccf773be4&number=20"
try {
    const response = await fetch (url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
} catch (error) {
    console.error(error.message);
}

}

export default {index};