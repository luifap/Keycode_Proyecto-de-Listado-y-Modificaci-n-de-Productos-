import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import PaginaInicio from "../components/pages/PaginaInicio";
import CardList from "../components/organisms/CardList";
import Formulario from "../components/pages/Formulario";
import NotFound from "../components/pages/NotFound";
import "../styles/styles.css";

const App = () => {
  const [cards, setCards] = useState([]);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/lista" element={<CardList cards={cards} setCards={setCards} />} />
          <Route path="/modificacion" element={<Formulario setCards={setCards} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

// Componente de Navegación
const Nav = () => {
  const location = useLocation();

  const showNav = location.pathname === '/' || location.pathname === '/lista' || location.pathname === '/modificacion';

  if (!showNav) return null;

  return (
    <nav>
      <button onClick={() => window.location.href = '/'}>Inicio</button>
      <button onClick={() => window.location.href = '/lista'}>Lista de Productos</button>
      <button onClick={() => window.location.href = '/modificacion'}>Agregar Producto</button>
    </nav>
  );
};

export default App;
