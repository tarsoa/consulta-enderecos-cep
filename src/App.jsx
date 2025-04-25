import { Component } from "react";
import Busca from "./components/Busca";
import LocalidadeLista from "./components/LocalidadeLista";
import viacepClient from "./utils/viacepClient";

class App extends Component {
  state = {
    localidades: []
  };

  onBuscaRealizada = (cep) => {
    if (!cep) {
      alert("Digite um CEP válido");
      return;
    }

    viacepClient.get(`/${cep}/json/`)
      .then(result => {
        if (result.data.erro) {
          alert("CEP não encontrado");
          return;
        }

        if (this.state.localidades.some(loc => loc.cep === result.data.cep)) {
          alert("Esse CEP já está listado");
          return;
        }

        const novaLocalidade = {
          cep: result.data.cep,
          logradouro: result.data.logradouro,
          bairro: result.data.bairro,
          localidade: result.data.localidade,
          uf: result.data.uf
        };

        this.setState((estadoAnterior) => ({
          localidades: [novaLocalidade, ...estadoAnterior.localidades]
        }));
      })
      .catch(() => {
        alert("Erro ao buscar CEP");
      });
  };

  render() {
    return (
      <div className="grid justify-content-center">
        <div className="col-12 md:col-6">
          <Busca dica="Digite um CEP..." onBuscaRealizada={this.onBuscaRealizada} />
          <LocalidadeLista localidades={this.state.localidades} />
        </div>
      </div>
    );
  }
}

export default App;
