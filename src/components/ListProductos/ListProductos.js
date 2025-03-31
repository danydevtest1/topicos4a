import React from "react";
import { Table, Button, Image } from "react-bootstrap";
import { ENV } from "../../utils";

const urlImagen=ENV.BASE_PATH;

export function ListProductos(props) {
  const { productos } = props;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Unidad</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
          <tr>
            <td>{index+1}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.unidad}</td>
            <td><Image src={urlImagen+producto.imagen}/></td>
            <td>
              <Button variant="success">Editar</Button>
            </td>
            <td>
              <Button variant="danger">Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
