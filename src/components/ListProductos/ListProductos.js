
import { Table } from "react-bootstrap";
//import { ENV } from "../../utils";
//import { FormGuardarEdit } from "../Fomulario";
import { Filas } from "./Filas";

//const urlImagen=ENV.BASE_PATH;

export function ListProductos(props) {
  const { productos, eliminar, onReload } = props;
  

  

  return (
    <>
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
          
          <Filas index={index} producto={producto} eliminar={eliminar} onReload={onReload}/>
        ))}
       
      </tbody>
    </Table>
   
    </>
  );
}
