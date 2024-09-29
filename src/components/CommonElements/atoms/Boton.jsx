import React from 'react';

const Boton = ({ onClick, children }) => {
  return <button className="boton" onClick={onClick}>{children}</button>;
};

export default Boton;