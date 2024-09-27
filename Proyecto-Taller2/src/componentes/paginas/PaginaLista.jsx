import React, { useEffect, useState } from 'react';

const PaginaLista = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Aquí harías la llamada a la API
    // setProductos(fetchedProducts);
  }, []);

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