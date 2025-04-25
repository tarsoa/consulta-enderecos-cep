import React from "react";

function LocalidadeLista({ enderecos }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
      {enderecos.map((endereco, index) => (
        <div
          key={index}
          style={{
            width: "400px",
            margin: "0 auto",
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
          }}
        >
          <p><strong>{endereco.cep}</strong></p>
          <p>{endereco.logradouro}</p>
          <p>{endereco.bairro}</p>
          <p>{endereco.localidade} - {endereco.uf}</p>
        </div>
      ))}
    </div>
  );
}

export default LocalidadeLista;
