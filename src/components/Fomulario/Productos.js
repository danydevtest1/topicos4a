import React, { useState, useRef, useCallback , useEffect} from "react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { Button, Form, Row, Col, InputGroup, Image } from "react-bootstrap";
import { initialValues, validationSchema } from "./Productos.form";
import {imagenes} from "../../assets";
import { Producto } from "../../api";

import "./Productos.scss";
import { ListProductos } from "../ListProductos/ListProductos";

const ctrProducto = new Producto();

export function Productos() {
  const formulario = useRef();
   const [productosData, setProductosData] = useState([]);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      await ctrProducto.createProduct(formValue);
      //console.log(formValue);
      buscarProductos();
      //formulario.current.reset();
    },
  });

  const buscarProductos=async()=>{
    const prod= await ctrProducto.buscaProducto();
    setProductosData(prod);
    console.log(prod);
    
  }

  // const busca = await Axios.get(urlEnv);

  /* const listItems=productosData.map((datos)=>(
    <h1>{datos.nombre}</h1>
  )) */
  /* 
  const onChange = (e) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
  }; */

  /*  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(valores);
  }; */

  const onDrop = useCallback((acceptedFiles) => {
    const file=acceptedFiles[0];
   formik.setFieldValue("imagep", URL.createObjectURL(file));
   formik.setFieldValue("imagenFile",file);
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/gif",
    onDrop,
  });

  const getImagen=()=>{
    if(formik.values.imagenFile){

      return formik.values.imagep
    }
    return imagenes.noAvatar
  }

  useEffect(() => {
    buscarProductos();
  }, [])
  

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
        </Row>
        <Row>
          <div  className="form-imagen" {...getRootProps()}>
            <input {...getInputProps()} />
           <Image src={getImagen()} roundedCircle/>
          </div>
        </Row>

        <Button type="submit">Enviar</Button>
      </Form>

      <Row>
        <ListProductos productos={productosData}/>
      </Row>
    </div>
  );
}
