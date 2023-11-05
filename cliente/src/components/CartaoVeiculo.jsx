import React from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 

const CartaoVeiculo = ( {veiculo} ) => {
  return (
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>Locadora: Locadora: {veiculo.locadora}</Card.Title>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item variant="info">{veiculo.marca} {veiculo.modelo}</ListGroup.Item>
        <ListGroup.Item variant="info">{veiculo.cambio}</ListGroup.Item>
        <ListGroup.Item variant="info">{veiculo.portas} portas</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to={`/veiculo/${veiculo.id}`}>
          <Button size='sm' variant="success">Detalhar{'>'}</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CartaoVeiculo