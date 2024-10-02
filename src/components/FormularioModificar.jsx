import React, { useState } from 'react';
import { addCharacter } from '../api/rickAndMorty';

const FormularioModificar = () => {
const [nombre, setNombre] = useState('');
const [especie, setEspecie] = useState('');
const [genero, setGenero] = useState('');
const [imagen, setImagen] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPersonaje = {
    name: nombre,
    species: especie,
    gender: genero,
    image: imagen,
    };
    addCharacter(nuevoPersonaje).then((response) => {
    console.log(response);
      // Actualiza la lista de personajes
    });
};

return (
    <form onSubmit={handleSubmit}>
    <label>Nombre:</label>
    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    <br />
    <label>Especie:</label>
    <input type="text" value={especie} onChange={(e) => setEspecie(e.target.value)} />
    <br />
    <label>Género:</label>
    <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
    </select>
    <br />
    <label>Imagen:</label>
    <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
    <br />
    <button type="submit">Agregar</button>
    </form>
);
};

export default FormularioModificar;