import './App.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import React from 'react';
import RecipeDetail from './components/recipe/RecipeDetail';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
