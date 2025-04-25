import { Component } from "react";
import Busca from "./components/Busca";
import LocalidadeLista from "./components/LocalidadeLista";
import GraficoPizza from "./components/GraficoPizza";
import viacepClient from "./utils/viacepClient";

class App extends Component {
  state = {
    localidades: [],
    graficoData: {}
  }

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

        this.setState(
          (estadoAnterior) => ({
            localidades: [novaLocalidade, ...estadoAnterior.localidades]
          }),
          this.atualizarGrafico
        );
      })
      .catch(() => {
        alert("Erro ao buscar CEP");
      });
  }

  atualizarGrafico = () => {
    const { localidades } = this.state;
    const contagem = {};

    localidades.forEach(loc => {
      contagem[loc.uf] = (contagem[loc.uf] || 0) + 1;
    });

    this.setState({
      graficoData: {
        labels: Object.keys(contagem),
        datasets: [{
          data: Object.values(contagem)
        }]
      }
    });
  }

  render() {
    return (
      <div className="grid justify-content-center">
        <div className="col-12 md:col-6">
          <Busca dica="Digite um CEP..." onBuscaRealizada={this.onBuscaRealizada} />
          <LocalidadeLista localidades={this.state.localidades} />
        </div>
        <div className="col-12 md:col-6 flex justify-content-center align-items-center">
          <GraficoPizza graficoData={this.state.graficoData} />
        </div>
      </div>
    )
  }
}

export default App;
