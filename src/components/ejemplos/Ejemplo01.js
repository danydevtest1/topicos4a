import React, {useState} from 'react';

//hooks useState

export  function Ejemplo01() {
  const [contador, setContador] = useState(0);

  const incrementarValor=()=>{
    setContador(contador + 1);
  }
  
  return (
    <div>
      <h1>Incremento: {contador}</h1>
      <button onClick={incrementarValor}>Incrementar</button>
    </div>
  )
}
