import React from "react";
import { Card } from "react-bootstrap";

export function ItemProductos({producto}) {
  return (
    
      <Card>
        <Card.Img variant="top" src={producto.imagen} style={{width:"200px", height:"70%"}} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            {producto.description}
          </Card.Text>
        </Card.Body>
      </Card>
  
  );
}
