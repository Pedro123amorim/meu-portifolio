// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Importando o Header
import Home from './components/Home'; // Importando a página inicial
import AboutMe from './components/AboutMe'; // Importando a página Sobre Mim

const App = () => {
  return (
    <Router>
      <Header /> {/* O Header aparece em todas as páginas */}
      <div className="pt-20"> {/* Adicionando um espaçamento para o conteúdo não ficar atrás do Header */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página inicial */}
          <Route path="/about" element={<AboutMe />} /> {/* Página Sobre Mim */}
          <Route path="/projects" element={<div>Projetos</div>} />
          <Route path="/contact" element={<div>Contato</div>} />
          <Route path="/resume" element={<div>Currículo</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
