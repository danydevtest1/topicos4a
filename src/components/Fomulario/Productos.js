//import React, { useState } from "react";
import {useFormik} from "formik";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import {initialValues,validationSchema} from "./Productos.form";
import { ListProductos } from "../ListProductos";
import {Producto} from "../../api";
//import axios from "axios";
//import Axios from "../../services/Axios";


const ctrProducto=new Producto();

export function Productos() {
 /*  const Datos = {
    nombre: "",
    precio: "",
    cantidad: "",
    unidad: "",
    imagen: "",
  }; */

 /*  const [valores, setValores] = useState();
  const [informacion, setInformacion] = useState([]);
 */
  const formik= useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange:false,
    onSubmit:async(formValue)=>{
      const response=ctrProducto.createProduct(formValue);
      console.log(response);
      
      
}})
/* 
  const onChange = (e) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
  }; */

 /*  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(valores);
  }; */


  

  return (
    <div className="p-4">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Producto"
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              required
              type="number"
              name="precio"
              placeholder="Precio"
              value={formik.values.precio}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Cantidad</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="number"
                name="cantidad"
                placeholder="Cantidad"
                value={formik.values.cantidad}
                onChange={formik.handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Unidad</Form.Label>
            <Form.Control
              type="text"
              name="unidad"
              placeholder="Unidad"
              value={formik.values.unidad}
              onChange={formik.handleChange}
              error={formik.errors.unidad}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="file"
              required
              name="imagen"
              value={formik.values.imagen}
              onChange={formik.handleChange}
            />
          </Form.Group>
        </Row>

        <Button type="submit">Enviar</Button>
      </Form>

      <Row>
        <ListProductos/>
      </Row>
    </div>
  );
}
