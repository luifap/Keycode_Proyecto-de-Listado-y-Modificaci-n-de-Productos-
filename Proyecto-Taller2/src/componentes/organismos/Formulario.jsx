import React, { useState } from 'react';

const Formulario = ({ agregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [mensaje, setMensaje] = useState(''); // Estado para el mensaje de confirmación

  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      nombre,
      descripcion,
      imagen,
    };
    agregarProducto(nuevoProducto);
    setNombre('');
    setDescripcion('');
    setImagen('');
    
    // Mostrar mensaje de confirmación
    setMensaje('Producto agregado con éxito!');

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };

  return (
    <div>
      <form className="formulario" onSubmit={manejarSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del producto</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción</label>
          <input
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imagen">URL de la imagen</label>
          <input
            type="url"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <button type="submit">Añadir producto</button>
      </form>
      {mensaje && <p className="mensaje-confirmacion">{mensaje}</p>} {/* Mostrar mensaje si existe */}
    </div>
  );
};

export default Formulario;