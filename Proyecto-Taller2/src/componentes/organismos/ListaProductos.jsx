import React, { useEffect, useState } from "react";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const totalPages = 5; 

  useEffect(() => {
    const fetchProductos = async () => {
      setCargando(true);
      const allProductos = []; // Array para almacenar todos los productos
      try {
        for (let page = 1; page <= totalPages; page++) {
          const response = await fetch('https://rickandmortyapi.com/api/character?page=${page}');
          if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
          }
          const data = await response.json();
          allProductos.push(...data.results); // Agregar los resultados al array
        }
        setProductos(allProductos); // Almacenar todos los productos
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="lista-productos">
      {cargando ? (
        <p>Cargando productos...</p>
      ) : productos.length > 0 ? (
        productos.map((producto) => (
          <div className="tarjeta" key={producto.id}>
            <h3>{producto.name}</h3>
            <img src={producto.image} alt={producto.name} className="tarjeta-imagen" />
            <p>{producto.status}</p> {/* O cualquier otra propiedad */}
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ListaProductos;