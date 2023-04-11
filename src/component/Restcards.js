import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Restcards({restData}) {

  return (
    <div>
      <Link to={`/view_restuarent/${restData.id}`} style={{textDecoration:'none',color:'white'}}>
      <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restData.photograph} />
      <Card.Body>
        <Card.Title>{restData.name}</Card.Title>
        <Card.Text>
         <p>
            {restData.address}
         </p>
         <p>{restData.cuisine_type}</p>
         <p>{restData.neighborhood}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default Restcards
