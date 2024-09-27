import React, { useState } from 'react';

const Formulario = ({ agregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

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
  };

  return (
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
  );
};

export default Formulario;