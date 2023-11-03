  import React, {useState, useEffect} from 'react'
  import axios from 'axios'
  import {Button, Container, Form} from 'react-bootstrap';
  import {useParams} from 'react-router';
  import{ useNavigate } from 'react-router-dom'

  const AtualizaVeiculo = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [locadora, setLocadora] = useState('')
    const [modelo, setModelo] = useState('')
    const [marca, setMarca] = useState('')
    const [ano, setAno] = useState(0)
    const [motor, setMotor] = useState('')
    const [portas, setPortas] = useState(0)
    const [cambio, setCambio] = useState('')
    const [ar_condicionado, setAr_Condicionado] = useState()

    const trataAr = (e) => {
      setAr_Condicionado(!ar_condicionado)
    }
    
    useEffect(() => {

      const dadosVeiculoId = async() =>{
        const {data} = await axios.get(`/api/veiculos/${id}`)
        setLocadora(data.locadora)
        setModelo(data.modelo)
        setMarca(data.marca)
        setAno(data.ano)
        setMotor(data.motor)
        setPortas(data.portas)
        setCambio(data.cambio)
        setAr_Condicionado(data.ar_condicionado)
      }
      dadosVeiculoId()
    }, [id])

    const atualizaVeiculo = async(e) => {
      e.preventDefault()
      const dados = {
        locadora: locadora,
        modelo: modelo,
        marca: marca,
        ano: ano,
        motor: motor,
        portas: portas,
        cambio: cambio,
        ar_condicionado: ar_condicionado
      }

      await axios.put(`/api/veiculos/${id}`, dados)

      navigate('/veiculos')
    }

    return (
      <>
        <Container className='ms-0 mt-2'>
        <h2>CRUD de Veículos</h2>
        <h4>Editar Veículo</h4>
        <Form onSubmit={atualizaVeiculo}>
        <Form.Group className="mb-2" controlId="locadora">
          <Form.Label>Locadora:</Form.Label>
          <Form.Control required size='sm' type="text" className='border-dark rounded-0' style={{borderWidth:'0.5px'}}
            value = {locadora}
            onChange={(e)=>setLocadora(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="modelo">
          <Form.Label>Modelo:</Form.Label>
          <Form.Control required size='sm' type="text" className='border-dark rounded-0' style={{borderWidth:'0.5px'}}
            value = {modelo}
            onChange={(e)=>setModelo(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="marca">
          <Form.Label>Marca:</Form.Label>
          <Form.Control required size='sm' type="text" className='border-dark rounded-0' style={{borderWidth:'0.5px'}}
            value = {marca}
            onChange={(e)=>setMarca(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="ano">
          <Form.Label>Ano:</Form.Label>
          <Form.Control required size='sm' type="number" className='border-dark rounded-0' style={{borderWidth:'0.5px'}}
            value = {ano}
            onChange={(e)=>setAno(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="motor">
          <Form.Label>Motor:</Form.Label>
          <Form.Control required size='sm' type="text" className='border-dark rounded-0' style={{borderWidth:'0.5px'}}
            value = {motor}
            onChange={(e)=>setMotor(e.target.value)}        
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="portas">
          <Form.Label>Portas:</Form.Label>
          <Form.Control required size='sm' type="number" className='border-dark rounded-0' style={{borderWidth:'0.5px'}}
            value = {portas}
            onChange={(e)=>setPortas(e.target.value)}  
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="cambio">
          <Form.Label>Câmbio:</Form.Label>
          <Form.Control required size='sm' type="text" className='border-dark rounded-0' style={{borderWidth:'0.5px'}}
            value = {cambio}
            onChange={(e)=>setCambio(e.target.value)}        
          />
        </Form.Group>
        
        <Form.Group className="mb-2" controlId="ar_condicionado">
        <Form.Label>Ar condicionado:</Form.Label>
        <br />
          <div className='d-flex justify-content-center'>
          <input 
            onChange={trataAr}
            checked = {ar_condicionado}
            type='checkbox'>
          </input>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" size='sm' className='rounded-0 mb-3 p-2' style={{display:'block'}}>
          Atualizar dados
        </Button>
      </Form>
        </Container>
      </>
    )
  }

  export default AtualizaVeiculo