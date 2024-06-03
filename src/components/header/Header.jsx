import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold mr-4">Rezept-App</Link>
          <nav>
            <Link to="/" className="text-gray-300 mr-4 hover:text-white">Startseite</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
