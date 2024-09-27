import React, { useState } from 'react';
import PaginaInicio from './componentes/paginas/PaginaInicio';
import ListaProductos from './componentes/organismos/ListaProductos';
import Formulario from './componentes/organismos/Formulario';
import './componentes/estilos/styles.css';  // Importar los estilos desde la carpeta 'estilos'

const App = () => {
  const [paginaActual, setPaginaActual] = useState("inicio");

  return (
    <div>
      <nav>
        <button onClick={() => setPaginaActual("inicio")}>Inicio</button>
        <button onClick={() => setPaginaActual("lista")}>Lista de Productos</button>
        <button onClick={() => setPaginaActual("modificacion")}>Agregar Producto</button>
      </nav>
      {paginaActual === "inicio" && <PaginaInicio />}
      {paginaActual === "lista" && <ListaProductos />}
      {paginaActual === "modificacion" && <Formulario />}
    </div>
  );
};

export default App;