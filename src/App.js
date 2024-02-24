import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Recipes from './pages/Recipes';
import RecipeInfo from './pages/RecipeInfo';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Favourite from './components/Favourite';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeInfo />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>

    </div>
  );
}

export default App;
