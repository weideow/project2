import { Route, Routes } from 'react-router-dom';
import IngredientInput from './components/IngredientInput';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import RecipeSearchPage from './pages/RecipePage';

const App = () => {
  return (
    <main>
      <Navbar />
      <h1>What shall we eat?</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RecipeSearchPage />} />
        <Route path="/ingredients" element={<IngredientInput />} />
      </Routes>
    </main>
  );
};

export default App;