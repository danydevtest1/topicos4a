import React, { useState, useEffect } from "react";

import { Button, Modal, Row } from "react-bootstrap";

import { Producto } from "../../api";

import "./Productos.scss";
import { ListProductos } from "../ListProductos/ListProductos";
import { FormGuardarEdit } from "./FormGuardarEdit";

const ctrProducto = new Producto();

export function Productos() {
  
  const [productosData, setProductosData] = useState([]);
 const [show, setShow] = useState(false)
 const [reload, setReload]=useState(false);

const openCloseModal=()=>setShow((prevState)=>!prevState);
const onReload=()=>setReload((prevState)=>!prevState);

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
  }, [reload]);

  return (
    <div className="p-4">
     <Row>
     <Button variant="success" size="lg" onClick={openCloseModal}>Agregar producto...</Button>
     </Row>

      <Row>
        <ListProductos productos={productosData} eliminar={eliminarProducto} onReload={onReload} />
      </Row>
      <Row>
      <Modal show={show} onHide={openCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Guardar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGuardarEdit onReload={onReload} close={openCloseModal} />
        </Modal.Body>
       
      </Modal>
      </Row>
    </div>
  );
}
