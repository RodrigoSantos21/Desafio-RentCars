import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import CartaoVeiculo from '../components/CartaoVeiculo.jsx'

const RetornaVeiculos = () => {
  
  const [veiculos, setVeiculos] = useState([])

  useEffect(() => {
    const obtemDadosVeiculo = async () => {
      const { data } = await axios.get('/api/veiculos/retornaVeiculos')
      setVeiculos(data)
    }
    obtemDadosVeiculo()
  }, [])

  return (
    <>
    <Container>
      <Container className='d-flex flex-column align-items-center'>
        <h1 className='text-center d-block'>Lista com todos os veículos</h1>
        <Link to={`/adicionaVeiculo`}>
            <Button size='md' variant="primary">Adicionar novo veículo</Button>
        </Link>
      </Container>
      <hr />

      <Row className="g-2">
        {
          veiculos.map(veiculo => {
            return <Col md lg sm key={veiculo.id}>
              <CartaoVeiculo veiculo = {veiculo} />
            </Col>
          })
        }
      </Row>
    </Container>

    </>
  )
}

export default RetornaVeiculos