import { Moon, Sun } from 'lucide-react';

import { Link } from 'react-router-dom';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold mr-4">Rezept-App</Link>
          <nav>
            <Link to="/" className="text-gray-300 mr-4 hover:text-white">Startseite</Link>
          </nav>
        </div>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {theme === 'light' ? <Sun className="text-yellow-500" /> : <Moon className="text-white" />}
      </button>
    </header>
  );
}

export default Header;
