// src/components/Home.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Certifique-se de que este ícone esteja importado corretamente
import perfil from '../assets/perfil.jpg'; // Certifique-se de que o caminho para a imagem está correto

const Home = () => {
  return (
    <div className="home min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-4">
      {/* Foto */}
      <img
        src={perfil}
        alt="Foto de perfil"
        className="perfil w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-6"
      />
      
      {/* Texto de boas-vindas */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-800">
          Olá, eu sou <span className="text-blue-600">Pedro Henrique Amorim</span>!
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Atuante na área de tecnologia voltada a processos de negócio, sendo uma ponte para arquitetar soluções de 
          acordo com as necessidades do cliente até implantação da solução junto ao mesmo. 
          Adquiri várias experiências de muitos setores de empresas, aprendendo assim uma visão sistêmica do negócio. 
          Meu foco é criar um elo forte entre os processos de negócio e a tecnologia, me tornando assim um profissional 
          capaz de entender as necessidades dos usuários e desenvolver soluções capazes de contribuir diretamente na jornada de trabalho. 
          Sempre sonhei em me tornar um desenvolvedor completo e acredito que seja um diferencial entender bem as rotinas do nosso cliente, 
          para podermos assim entregar uma solução capaz de agregar valor.
        </p>
      </div>
      
      {/* Links de redes sociais */}
      <div className="actions mt-6 flex space-x-4">
        <a href="https://www.linkedin.com/in/pedro-amorim-028183113/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700 hover:text-blue-900" />
        </a>
        <a href="https://github.com/Pedro123amorim" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-800 hover:text-gray-600" />
        </a>
        <a href="mailto:pedrohenriqueamorim727@gmail.com" target="_blank" rel="noopener noreferrer">  {/* Link de e-mail */}
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-800 hover:text-gray-600" />
        </a>
      </div>
    </div>
  );
};

export default Home;
