import React,{useEffect, useState}  from 'react'
import {Card, ListGroup, Button, Container} from 'react-bootstrap';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios' 

const DetalhaVeiculo = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [locadora, setLocadora] = useState('')
  const [modelo, setModelo] = useState('')
  const [marca, setMarca] = useState('')
  const [ano, setAno] = useState(0)
  const [motor, setMotor] = useState('')
  const [portas, setPortas] = useState(0)
  const [cambio, setCambio] = useState('')
  const [ar_condicionado, setAr_Condicionado] = useState(false)


  useEffect(() => {

    const dadosUmVeiculo = async() => {
      const { data } = await axios.get(`/api/veiculos/${id}`)
      setLocadora(data.locadora)
      setModelo(data.modelo)
      setMarca(data.marca)
      setAno(data.ano)
      setMotor(data.motor)
      setPortas(data.portas)
      setCambio(data.cambio)
      setAr_Condicionado(data.ar_condicionado)
      console.log(data.ar_condicionado)
    }
    dadosUmVeiculo()
  },[id])

  const deletaVeiculo = async(id) => {

    await axios.delete(`/api/veiculos/${id}`)
    navigate('/veiculos')
  }

  return (
    <>
    <Container className='ms-3 mt-3'>
    <h1>Detalhes do Veiculo: {modelo}</h1>
    <hr />
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>Veículo da {locadora}</Card.Title>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item variant="info">Modelo: {modelo}</ListGroup.Item>
        <ListGroup.Item variant="info">Marca: {marca}</ListGroup.Item>
        <ListGroup.Item variant="info">Ano: {ano}</ListGroup.Item>
        <ListGroup.Item variant="info">Motor: {motor}</ListGroup.Item>
        <ListGroup.Item variant="info">Portas: {portas}</ListGroup.Item>
        <ListGroup.Item variant="info">Câmbio: {cambio}</ListGroup.Item>
        <ListGroup.Item variant="info">Ar condicionado:
        {ar_condicionado ? ' Possui' : ' Não possui'}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className='d-flex justify-content-around'>
        <Link to={`/veiculos/atualiza/${id}`}>
          <Button size='sm' variant="secondary">Editar</Button>
        </Link>
        <Button size='sm' variant="danger" onClick={() => deletaVeiculo(id)}>Deletar</Button>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default DetalhaVeiculo