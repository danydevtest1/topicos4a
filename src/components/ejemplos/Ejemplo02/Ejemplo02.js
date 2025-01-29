import React from 'react';
import {Button} from "react-bootstrap";

export function Ejemplo02(props) {
  const {contador, incrementar,decrementar,fondo}=props;
  console.log(props);
  
  return (
    <div style={fondo.tema}>
      <h1>Valor: {contador}</h1>
      <div className='target__button'>
        <Button variant="success" onClick={incrementar}>Incrementar</Button>
        <Button variant="danger" onClick={decrementar}>Decrementar</Button>
      </div>
    </div>
  )
}
