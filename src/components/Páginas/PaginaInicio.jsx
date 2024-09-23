// src/componentes/Paginas/PaginaInicio.js
import React from 'react';
import MiembroEquipo from '../MiembroEquipo';


// Ejemplo de datos del equipo
const equipo = [
  {
    nombre: "Yeraldin Urbina",
    foto: "https://avatars.githubusercontent.com/u/176393358?s=96&v=4",  // Aquí iría la URL de la foto
    github: "https://github.com/YeraldinUrbina"
  },
    
  {
    nombre: "Luisa Fernanda",
    foto: "https://avatars.githubusercontent.com/u/52289372?v=4",
    github: "https://github.com/luifap",
    
  },

  {
    nombre: "Diocelis",
    foto: "https://avatars.githubusercontent.com/u/177804536?v=4",
    github: "https://github.com/Dioce17",
    
  },
  // Agrega más miembros del equipo aquí
];

const PaginaInicio = () => {
  return (
    <div className="pagina-inicio">
      <h1>Nuestro Equipo</h1>
      <div className="equipo-lista">
        {equipo.map((miembro, index) => (
          <MiembroEquipo key={index} {...miembro} />
        ))}
      </div>
    </div>
  );
};

export default PaginaInicio;