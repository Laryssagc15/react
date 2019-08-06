import React, { Component } from 'react';
//Component de classe que é usado para ser endado
//A classe se torna um component
export default class saudacao extends Component {
  //state é para mostrar o que está acontecendo em cima.
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  };
  //Para receber os valores digitados
  setTipo(e) {
    this.setState({ tipo: e.target.value });
  }

  setNome(e) {
    this.setState({ nome: e.target.value });
  }

  render() {
    const { tipo, nome } = this.state;
    return (
      <div>
        <h1>
          {tipo}
          {nome}
        </h1>
        <hr />
        <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} />
        <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
      </div>
    );
  }
}
