// src/components/AboutMe.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me min-h-screen bg-gray-100 py-12 px-8 mt-20">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Sobre Mim</h1>
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl mx-auto">
        {/* Lado Esquerdo: Experiência Profissional */}
        <div className="experience w-full md:w-1/2 pr-4">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Experiência Profissional</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-semibold text-blue-600">Laticínio Belo Vale LTDA</h3>
              <p className="text-gray-600 text-sm">Mar 2015 - Out 2020</p>
              <p className="text-gray-700 mt-2">
                Durante minha passagem pela Laticínio Belo Vale, minha primeira experiência profissional, enfrentei vários desafios que me lapidaram ao mercado. Foi nesta empresa que descobri minha principal paixão, que é a tecnologia. Algumas das minhas funções e etapas foram:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Aprendiz Assistente Administrativo</li>
                <li>Estagiário</li>
                <li>Auxiliar Administrativo</li>
                <li>Técnico em Sistemas de Informação</li>
              </ul>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-blue-600">InfoLight Tecnologia</h3>
              <p className="text-gray-600 text-sm">Out 2020 - Abr 2021</p>
              <p className="text-gray-700 mt-2">
                Atuei como analista de sistemas, desenvolvendo ferramentas para gestão interna e melhorando fluxos operacionais.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-blue-600">Sankhya Gestão de Negócios (Recife)</h3>
              <p className="text-gray-600 text-sm">Mai 2021 - Atual</p>
              <p className="text-gray-700 mt-2">
                Iniciei como analista de implantação até migrar para área tech, onde me desenvolvi ainda mais em relação a processos de negócio, unindo esse conhecimento com tecnologia para ter uma visão mais ampla.
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Analista de Implantação II - Mai 2021 - Dez 2023</li>
                <li>Developer I - Atual</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Lado Direito: Habilidades */}
        <div className="skills w-full md:w-1/2 pl-4 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Minhas Habilidades</h2>
          <div className="hard-skills mb-8">
            <h3 className="text-lg font-semibold text-blue-600">Hard Skills</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Desenvolvimento Web (React, JavaScript, HTML, CSS)</li>
              <li>Backend (Java, Spring Boot, SQL, Python)</li>
              <li>Integração de Sistemas</li>
              <li>Gestão de Bancos de Dados (SQL Server, MySql, Oracle Database)</li>
              <li>Formatador de Relatórios (Ireport)</li>
              <li>ERP (Sankhya, InfoLight)</li>
            </ul>
          </div>
          <div className="soft-skills">
            <h3 className="text-lg font-semibold text-blue-600">Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Comunicação Eficaz</li>
              <li>Trabalho em Equipe</li>
              <li>Atenção aos detalhes</li>
              <li>Criatividade</li>
              <li>Motivação pessoal</li>
              <li>Capacidade de aprendizagem contínua</li>
              <li>Flexibilidade em ambientes de mudança</li>
              <li>Empatia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
