import { NavLink, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import IngredientInput from './components/IngredientInput';
import RecipeSearch from './components/RecipeSearch';


const App = () => {
  return (
    <>
    <h1>What shall we eat?</h1>
  <Routes>
    <Route path = "/search" component = {RecipeSearch}></Route>
    {/* <Route path = "/ingredients" component = {IngredientInput}></Route> */}
  </Routes>
  </>
  )
};

export default App;