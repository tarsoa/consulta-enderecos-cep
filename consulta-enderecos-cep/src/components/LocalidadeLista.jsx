import React from 'react';
import Localidade from './Localidade';

const LocalidadeLista = ({ localidades }) => {
  if (!localidades || localidades.length === 0) {
    return null;
  }

  return (
    <div className="grid">
      {localidades.map((item) => (
        <div className="col-12" key={item.cep}>
          <Localidade localidade={item} />
        </div>
      ))}
    </div>
  );
};

export default LocalidadeLista;