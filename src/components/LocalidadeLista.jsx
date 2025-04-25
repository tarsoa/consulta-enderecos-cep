import React from 'react';
import Localidade from './Localidade';

const LocalidadeLista = ({ localidades }) => {
  if (!localidades || localidades.length === 0) {
    return null;
  }

  return (
    <div className="grid">
      {localidades.map((localidade) => (
        <div className="col-12" key={localidade.cep}>
          <Localidade localidade={localidade} />
        </div>
      ))}
    </div>
  );
};

export default LocalidadeLista;