import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicio from "../pages/PaginaInicio";
import CardList from "../components/layout/CardList";
import  Formulario from "../components/layout/Formulario";
import NotFound from "../pages/NotFound";
import "../styles/styles.css";

const App = () => {
  const [paginaActual, setPaginaActual] = useState("inicio");
  const [cards, setCards] = useState([]); 

  // Función para agregar un nuevo producto
  const agregarCard = (card) => {
    setCrads((prevCards) => [...prevCards, card]);
  };

  return (
    <div>
      <nav>
        <button onClick={() => setPaginaActual("inicio")}>Inicio</button>
        <button onClick={() => setPaginaActual("lista")}>Lista de Productos</button>
        <button onClick={() => setPaginaActual("modificacion")}>Agregar Producto</button>
      </nav>
      {paginaActual === "inicio" && <PaginaInicio />}
      {paginaActual === "lista" && <CardList cards={cards} />} 
      {paginaActual === "modificacion" && <Formulario agregarCard={agregarCard} />} {/* Pasar la función agregarProducto */}
   
    </div>
    
  );
};

export default App;
