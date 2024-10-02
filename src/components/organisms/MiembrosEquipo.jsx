import React from 'react';


const miembrosEquipo = [
  {
    nombre: 'Yeraldin Urbina',
    foto: 'https://avatars.githubusercontent.com/u/176393358?s=96&v=4', 
    github: 'https://github.com/YeraldinUrbina',
    linkedin: 'https://www.linkedin.com/in/yeraldin-urbina-b5608332b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apphttps://www.linkedin.com/in/nombre1',
  },
  {
    nombre: 'Luisa Arboleda',
    foto: 'https://avatars.githubusercontent.com/u/52289372?v=4', 
    github: 'https://github.com/luifap',
    linkedin: 'https://www.linkedin.com/in/luisa-fernanda-arboleda-parra-414959247/',
  },
  {
    nombre: 'Diocelis',
    foto: 'https://avatars.githubusercontent.com/u/177804536?v=4', 
    github: 'https://github.com/Dioce17',
    linkedin: 'https://www.linkedin.com/in/diocelis-puertas-49a137315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

const MiembrosEquipo = () => {
  return (
    <div className="miembros-equipo">
      {miembrosEquipo.map((miembro, index) => (
        <div key={index} className="miembro">
          <img src={miembro.foto} alt={miembro.nombre} className="foto-miembro" />
          <h3>{miembro.nombre}</h3>
          <div className="enlaces">
            <a href={miembro.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiembrosEquipo;
