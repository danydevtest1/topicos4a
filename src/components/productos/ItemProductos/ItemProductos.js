import React from "react";
import { Card } from "react-bootstrap";
import "./ItemProductos.scss";

export function ItemProductos({ producto }) {
  return (
    <Card>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body className="body">
        <Card.Title className="body__title">
          {producto.nombre}
        </Card.Title>
        <Card.Text className="body__text">
          {producto.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
