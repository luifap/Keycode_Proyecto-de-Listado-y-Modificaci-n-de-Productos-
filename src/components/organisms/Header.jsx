import React from 'react';
import Boton from '../atoms/Boton';

const Header = ({ onPageChange }) => {
  return (
    <header className="Header">
      <Boton onClick={() => onPageChange('inicio')}>Inicio</Boton>
      <Boton onClick={() => onPageChange('lista')}>Lista de Productos</Boton>
      <Boton onClick={() => onPageChange('modificacion')}>Modificación</Boton>
    </header>
  );
};

export default Header;