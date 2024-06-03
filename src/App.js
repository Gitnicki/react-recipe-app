import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import RecipeDetail from './components/recipe/RecipeDetail';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
