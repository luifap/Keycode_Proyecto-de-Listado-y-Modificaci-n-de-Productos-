import React, { useState } from 'react';
import PaginaInicio from './componentes/paginas/PaginaInicio';
import ListaProductos from './componentes/organismos/ListaProductos';
import Formulario from './componentes/organismos/Formulario';
import './componentes/estilos/styles.css';  // Importar los estilos desde la carpeta 'estilos'

const App = () => {
  const [paginaActual, setPaginaActual] = useState("inicio");
  const [productos, setProductos] = useState([]); // Estado para los productos

  // Función para agregar un nuevo producto
  const agregarProducto = (producto) => {
    setProductos((prevProductos) => [...prevProductos, producto]);
  };

  return (
    <div>
      <nav>
        <button onClick={() => setPaginaActual("inicio")}>Inicio</button>
        <button onClick={() => setPaginaActual("lista")}>Lista de Productos</button>
        <button onClick={() => setPaginaActual("modificacion")}>Agregar Producto</button>
      </nav>
      {paginaActual === "inicio" && <PaginaInicio />}
      {paginaActual === "lista" && <ListaProductos productos={productos} />} {/* Pasar productos a ListaProductos */}
      {paginaActual === "modificacion" && <Formulario agregarProducto={agregarProducto} />} {/* Pasar la función agregarProducto */}
    </div>
  );
};

export default App;