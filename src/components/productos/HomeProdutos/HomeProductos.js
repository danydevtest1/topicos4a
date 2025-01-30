import React from 'react';
import {Tabs, Tab} from "react-bootstrap";
import {ItemProductos} from "../ItemProductos";
import {Datos} from '../../../utils/bd';

export function HomeProductos() {
console.log(Datos);

  const fondo={
    tema:{
      backgroundColor:'black',
      color:"white",
      fontSize:'20px'
    }
  }
  return (
    <div className='container' style={fondo.tema}>
    <Tabs
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="home" title="Lista de Productos">
      {
        Datos.map((producto)=>(
          <ItemProductos/>
        )
        )
      }
      
    </Tab>
  </Tabs>
  </div>
  )
}
