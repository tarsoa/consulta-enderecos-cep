import React, { useEffect, useState } from "react";
import viacepClient from "../utils/viacepClient";

function Busca() {
  const [cep, setCep] = useState("");

  const cepsFixos = ["04094050", "55592970"];

    useEffect(() => {
    const buscarCepsFixos = async () => {
      try {
        const respostas = await Promise.all(
          cepsFixos.map((cep) => viacepClient.get(`${cep}/json`))
        );
        respostas.forEach((res) =>
          console.log("CEP fixo retornado pela API:", res.data)
        );
      } catch (error) {
        console.error("Erro ao buscar os CEPs fixos:", error);
      }
    };

    buscarCepsFixos();
  }, []);

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
        console.log("CEP digitado retornado pela API:", dados);
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
    </div>
  );
}

export default Busca;
