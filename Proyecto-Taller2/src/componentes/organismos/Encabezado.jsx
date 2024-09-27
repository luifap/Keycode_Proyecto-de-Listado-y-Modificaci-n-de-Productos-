import React from 'react';
import Boton from '../atomos/Boton';

const Encabezado = ({ onPageChange }) => {
  return (
    <header className="encabezado">
      <Boton onClick={() => onPageChange('inicio')}>Inicio</Boton>
      <Boton onClick={() => onPageChange('lista')}>Lista de Productos</Boton>
      <Boton onClick={() => onPageChange('modificacion')}>Modificación</Boton>
    </header>
  );
};

export default Encabezado;