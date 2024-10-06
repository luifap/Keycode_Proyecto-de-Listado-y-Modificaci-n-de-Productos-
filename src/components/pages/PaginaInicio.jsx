import React from 'react';
import MiembrosEquipo from '../organisms/MiembrosEquipo';

const PaginaInicio = () => {
  return (
    <div className="pagina-inicio">
      <h1>Proyecto de Listado y Modificación de Productos</h1>
      <h2>Nuestro Equipo</h2>
      <MiembrosEquipo />
    </div>
  );
};

export default PaginaInicio;