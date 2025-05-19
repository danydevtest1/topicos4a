import React, { useState, useEffect } from "react";

import { Button, Form, Row, Col, InputGroup, Image } from "react-bootstrap";

import { Producto } from "../../api";

import "./Productos.scss";
import { ListProductos } from "../ListProductos/ListProductos";
import { FormGuardarEdit } from "./FormGuardarEdit";

const ctrProducto = new Producto();

export function Productos() {
  
  const [productosData, setProductosData] = useState([]);
 

  const buscarProductos = async () => {
    const prod = await ctrProducto.buscaProducto();
    setProductosData(prod);
    console.log(prod);
  };


  
  const eliminarProducto = async (id) => {
    await ctrProducto.delProducto(id);
    buscarProductos();
  };

  useEffect(() => {
    buscarProductos();
  }, []);

  return (
    <div className="p-4">
     <Row>
     
     </Row>

      <Row>
        <ListProductos productos={productosData} eliminar={eliminarProducto} />
      </Row>
    </div>
  );
}
