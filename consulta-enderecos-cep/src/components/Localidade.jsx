import React from 'react';
import { Card } from 'primereact/card';

const Localidade = ({ localidade }) => {
  return (
    <Card className="shadow-2 mb-3">
      <div className="p-3 text-center">
        <p className="fw-bold mb-2">{localidade.cep}</p>
        <p>{localidade.logradouro}</p>
        <p>{localidade.bairro}</p>
        <p>{localidade.localidade} - {localidade.uf}</p>
      </div>
    </Card>
  );
};

export default Localidade;
