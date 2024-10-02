import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input'; 

function ContainerInputs({ inputs, onChange }) {
  return (
    <div>
      <Input
        label="Nombre del producto"
        type="text"
        name="nombre"
        placeholder="Ingrese el nombre del producto"
        onChange={onChange}
      />
      <Input
        label="Descripción"
        type="text"
        name="descripcion"
        placeholder="Ingrese la descripción"
        onChange={onChange}
      />
      <Input
        label="URL de la imagen"
        type="url"
        name="imagen"
        placeholder="Ingrese la URL de la imagen"
        onChange={onChange}
      />
    </div>
  );
}

ContainerInputs.propTypes = {
  inputs: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContainerInputs;