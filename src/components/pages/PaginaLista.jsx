import React, { useEffect, useState } from 'react';

const PaginaLista = () => {
  const [cards, setCards] = useState([]);
  return (
    <div className="pagina-lista">
      {productos.map(producto => (
        <div key={producto.id} className="tarjeta-producto">
          {producto.nombre}
        </div>
      ))}
    </div>
  );
};

export default PaginaLista;