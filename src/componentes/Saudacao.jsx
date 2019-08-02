import React, { Component } from 'react'
//Component de classe que é usado para ser endado
//A classe se torna um componente
export default class saudacao extends Component{
  render(){
    const { tipo, nome } = this.props
    return (
      <div>
        <h1>{ tipo }{ nome }</h1>
        <hr  />
        <input type = "text" placeholder = "Tipo..." value = {tipo} />
        <input type = "text" placrholder = "Nome..." value = {nome} />
      </div>
     )
   }
}