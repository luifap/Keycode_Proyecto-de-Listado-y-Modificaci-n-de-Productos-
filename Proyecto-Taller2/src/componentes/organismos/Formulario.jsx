import React, { useState } from 'react';

const Formulario = ({ agregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [origen, setOrigen] = useState('');
  const [especie, setEspecie] = useState('');
  const [estado, setEstado] = useState('');
  const [mensaje, setMensaje] = useState(''); // Estado para el mensaje de confirmación

  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      nombre,
      imagen,
      origen,
      especie,
      estado,
    };
    agregarProducto(nuevoProducto);
    setNombre('');
    setImagen('');
    setOrigen('');
    setEspecie('');
    setEstado('');
    
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
          <label htmlFor="imagen">URL de la imagen</label>
          <input
            type="url"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="origen">Origen</label>
          <input
            type="text"
            id="origen"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="especie">Especies</label>
          <input
            type="text"
            id="especie"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
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