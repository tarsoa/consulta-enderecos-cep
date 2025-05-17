// rafce
import React from 'react'
import Accordion from './components/Accordion'

const itens = [
  {
    titulo: 'Java',
    conteudo: 'Linguagem compilada e interpretada.'
  },
  {
    titulo: 'Python',
    conteudo: 'Linguagem interpretada e dinamicamente tipada.'
  },
  {
   titulo: 'JavaScript',
   conteudo: 'Interpretada. Executa do ldo do cliente e do lado do servidor.'
  }
]
const App = () => {
  return (
    <div>
      <Accordion itens={itens}/>
    </div>
  )
}

export default App
