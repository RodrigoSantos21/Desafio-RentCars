import React from 'react'
import {Button, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inicial = () => {
    
    const navigate = useNavigate()

    const redirecionaForms = () => {
        navigate('/adicionaVeiculo')
    }

    return (
    <Container className='mt-4'>
        <Container className='d-flex justify-content-center align-items-center flex-column'>
            <h1>Olá RentCars!</h1>
            <img src={require('../utils/rentcarsimg.png')} alt='Logo da rentcars' style={{width: '20%'}}/>
            <hr />
        </Container>
        <Container className='d-flex justify-content-center flex-column'>
            <Container className='d-flex justify-content-center'>
                <p><b>Gostaria de agradecer a oportunidade de participar desse processo, aprendi muito desenvolvendo este projeto. Muito obrigado!</b></p>
            </Container>
            <Container className='d-flex align-items-center flex-column'>
                <p>Clique no botão abaixo para adicionar um novo veículo:</p>
                <Container className='d-flex justify-content-center'>
                    <Button variant="primary" type="button" size='sm' className='rounded-0 p-1' onClick={redirecionaForms}>
                        Adicionar um novo veículo
                    </Button>
                </Container>
            </Container>
        </Container>
    </Container>
  )
}

export default Inicial