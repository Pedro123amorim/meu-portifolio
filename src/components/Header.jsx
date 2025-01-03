// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Certifique-se de importar o CSS

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="home-link">Página Inicial</Link>
          </li>
          <li>
            <Link to="/about">Sobre Mim</Link> {/* Corrigido para /about */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
