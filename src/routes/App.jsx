import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import PaginaInicio from "../components/pages/PaginaInicio";
import CardList from "../components/organisms/CardList";
import Formulario from "../components/pages/Formulario";
import NotFound from "../components/pages/NotFound";
import "../styles/styles.css";

const App = () => {
  const [cards, setCards] = useState([]);

  // Función para agregar un nuevo producto
  const agregarCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <Router>
      <div>
        <Nav />
        
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/lista" element={<CardList cards={cards} />} />
          <Route path="/modificacion" element={<Formulario agregarCard={agregarCard} />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
};

// Componente de Navegación
const Nav = () => {
  const location = useLocation();

  // Rutas donde se debe mostrar el nav
  const showNav = location.pathname === '/' || location.pathname === '/lista' || location.pathname === '/modificacion';

  if (!showNav) return null; // Oculta el nav si no es una de las páginas especificadas

  return (
    <nav>
      <button onClick={() => window.location.href = '/'}>Inicio</button>
      <button onClick={() => window.location.href = '/lista'}>Lista de Productos</button>
      <button onClick={() => window.location.href = '/modificacion'}>Agregar Producto</button>
    </nav>
  );
};

export default App;
