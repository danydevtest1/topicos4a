import React from 'react';
import {Routes, Route} from "react-router-dom";
import {HomeProductos} from "../components/productos";
import {Home} from "../page";

export function Rutas() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/producto' element={<HomeProductos/>}/>
    </Routes>
  )
}
