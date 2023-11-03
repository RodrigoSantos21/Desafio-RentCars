import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AdicionaVeiculo from './screens/AdicionaVeiculo'
import RetornaVeiculos from './screens/RetornaVeiculos'
import AtualizaVeiculo from './screens/AtualizaVeiculo'
import DetalhaVeiculo from './screens/DetalhaVeiculo'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/adicionaVeiculo' Component={AdicionaVeiculo} />
        <Route exact path='/veiculos' Component={RetornaVeiculos} />
        <Route exact path='/veiculos/atualiza/:id' Component={AtualizaVeiculo} />
        <Route exact path='/veiculo/:id' Component={DetalhaVeiculo} />
      </Routes>
    </Router>
  )
}

export default App