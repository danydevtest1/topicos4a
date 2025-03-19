import React from 'react';
import {Table, Button} from "react-bootstrap"

export  function ListProductos() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Unidad</th>
          <th>Imagen</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Galleta</td>
          <td>$15.00</td>
          <td>15</td>
          <td>250 g</td>
          <td>Imagen</td>
          <td><Button variant="success">Editar</Button></td>
          <td><Button variant='danger'>Eliminar</Button></td>
        </tr>
       
      </tbody>
    </Table>
  )
}
