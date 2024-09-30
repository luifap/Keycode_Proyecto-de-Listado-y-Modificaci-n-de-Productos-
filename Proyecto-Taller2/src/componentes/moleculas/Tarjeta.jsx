import React from 'react';

function Tarjeta({ tarjeta }) {
    return (
        <div className="tarjeta" key={tarjeta.id}>
            <h3>{tarjeta.name}</h3>
            <img className="tarjeta-imagen" src={tarjeta.image} alt={tarjeta.name} />
            <p>Origen: {tarjeta.origin.name}</p>
            <p>Especie: {tarjeta.species}</p>
            <p>Estado: {tarjeta.status}</p>
        </div>
    );
}

export default Tarjeta;