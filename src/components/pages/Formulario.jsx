import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/styles.css'; 

const Formulario = ({ setCards }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    origin: { name: '' },
    species: '',
    status: '',
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'origin.name') {
      setFormData((prev) => ({
        ...prev,
        origin: { ...prev.origin, name: value }, 
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { id: Date.now(), ...formData };

    setCards((prevCards) => [...prevCards, newCard]);
    setFormData({ name: '', image: '', origin: { name: '' }, species: '', status: '' });

    navigate('/lista');
};

return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="image">URL de imagen</label>
        <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="origin">Origen</label>
        <input type="text" name="origin.name" id="origin" value={formData.origin.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="species">Especie</label>
        <input type="text" name="species" id="species" value={formData.species} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="status">Estado</label>
        <input type="text" name="status" id="status" value={formData.status} onChange={handleChange} required />
      </div>
      <button type="submit">Agregar tarjeta</button>
    </form>
  );
};

export default Formulario;
