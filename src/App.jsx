import {Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeSearch from './components/RecipeSearch';
import IngredientInput from './components/IngredientInput';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <h1>What shall we eat?</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RecipeSearch />} />
        <Route path="/ingredients" element={<IngredientInput />} />
      </Routes>
    </>
  );
};

export default App;