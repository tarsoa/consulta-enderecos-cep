import React, { useEffect, useState } from "react";
import viacepClient from "../utils/viacepClient";
import LocalidadeLista from "./LocalidadeLista";

function Busca() {
  const [enderecos, setEnderecos] = useState([]);
  const cepsFixos = ["04094050", "55592970"];

  useEffect(() => {
    const buscarCEPs = async () => {
      try {
        const respostas = await Promise.all(
          cepsFixos.map((cep) => viacepClient.get(`${cep}/json`))
        );
        setEnderecos(respostas.map((res) => res.data));
      } catch (error) {
        console.error("Erro ao buscar CEPs fixos:", error);
      }
    };

    buscarCEPs();
  }, []);

  return <LocalidadeLista enderecos={enderecos} />;
}

export default Busca;
