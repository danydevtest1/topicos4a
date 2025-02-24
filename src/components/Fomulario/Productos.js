import React, { useState } from "react";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";

export function Productos() {
  const Datos = {
    nombre: "",
    apellidos: "",
    curp: "",
  };

  const [valores, setValores] = useState(Datos);
  const [informacion, setInformacion] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(valores);
  };

  return (
    <div className="p-4">
      <Form noValidate onSubmit={enviarDatos}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control required type="text" placeholder="Producto" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Precio</Form.Label>
            <Form.Control required type="number" placeholder="Precio" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Cantidad</Form.Label>
            <InputGroup hasValidation>
              <Form.Control type="number" placeholder="Cantidad" />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Unidad</Form.Label>
            <Form.Control type="text" placeholder="Unidad" />
          </Form.Group>        
        </Row>
       
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
}
