import React from 'react';
import {Table,Button} from "react-bootstrap";



export  function ListProductos(props) {
 
  
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Unidad</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td><Button variant='success'>Editar</Button></td>
        <td><Button variant='danger'>Eliminar</Button></td>
      </tr>
    </tbody>
  </Table>
        
       
         
        
    
   
  )
}
