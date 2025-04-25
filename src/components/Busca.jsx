import React, { useState } from "react";

function Busca() {
  const [cep, setCep] = useState("");

  const handleClick = () => {
    alert(`CEP digitado: ${cep}`);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginRight: "10px"
        }}
      />
      <button onClick={handleClick}>OK</button>
    </div>
  );
}

export default Busca;
