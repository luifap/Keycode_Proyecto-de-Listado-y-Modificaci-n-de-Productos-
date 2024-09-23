// src/componentes/MiembroEquipo.js
import React from 'react';

const MiembroEquipo = ({ nombre, foto, github, }) => {
  return (
    <div className="miembro-equipo">
      <img src={foto} alt={nombre} className="foto-equipo" />
      <h2>{nombre}</h2>
      <p>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
        
      </p>
    </div>
  );
};

export default MiembroEquipo;