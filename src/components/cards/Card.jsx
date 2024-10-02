import React from 'react';

function Card({ card }) {
    return (
        <div className="tarjeta" key={card.id}>
            <h3>{card.name}</h3>
            <img className="tarjeta-imagen" src={card.image} alt={card.name} />
            <p>Origen: {card.origin.name}</p>
            <p>Especie: {card.species}</p>
            <p>Estado: {card.status}</p>
        </div>
    );
}

export default Card;