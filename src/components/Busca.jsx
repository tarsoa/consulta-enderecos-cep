// rcc
import React, { Component } from 'react';

import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconField';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';

export default class Busca extends Component {
  state = {
    cep: ''
  };

  onCepAlterado = (event) => {
    console.log(event.target.value);
    this.setState({ cep: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onBuscaRealizada(this.state.cep);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="flex flex-column">
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText
              className="w-full"
              placeholder={this.props.dica}
              onChange={this.onCepAlterado}
              value={this.state.cep}
            />
          </IconField>
          <Button label="OK" outlined />
        </div>
      </form>
    );
  }
}

Busca.defaultProps = {
  dica: 'Digite o CEP...'
};
