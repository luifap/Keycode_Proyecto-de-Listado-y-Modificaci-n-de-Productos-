import React from 'react';

<div className="tarjeta" key={producto.id}>
  <h3>{producto.name}</h3>
  <img src={producto.image} alt={producto.name} className="tarjeta-imagen" />
  <p>Especie: {producto.species}</p>
  <p>Origen: {producto.origin.name}</p>
  <p>Estado: {producto.status}</p>
</div>

export default Tarjeta;