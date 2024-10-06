import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicio from "../pages/PaginaInicio";
import CardList from "../pages/CardList";
import NotFound from "../pages/NotFound";
import "../styles/estilos.css";

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInicio />} />
                <Route path="/card" element={<CardList />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
