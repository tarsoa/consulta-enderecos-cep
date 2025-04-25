import React, { useState } from "react";
import viacepClient from "../utils/viacepClient";
import LocalidadeLista from "./LocalidadeLista";

function Busca() {
  const [cep, setCep] = useState("");
  const [enderecos, setEnderecos] = useState([]);

  const buscarCepDigitado = async () => {
    if (!cep) {
      alert("Por favor, digite um CEP.");
      return;
    }

    try {
      const response = await viacepClient.get(`${cep}/json`);
      const dados = response.data;

      if (dados.erro) {
        alert("CEP inválido ou não encontrado.");
      } else {
        setEnderecos((prevEnderecos) => [dados, ...prevEnderecos]); // adiciona no topo
        setCep("");
      }
    } catch (error) {
      alert("Erro ao buscar o CEP.");
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      />
      <button onClick={buscarCepDigitado}>Buscar</button>

      <LocalidadeLista enderecos={enderecos} />
    </div>
  );
}

export default Busca;
