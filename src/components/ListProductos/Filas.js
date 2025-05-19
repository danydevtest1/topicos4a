import {useState} from 'react';
import {Image, Button, Modal} from "react-bootstrap";
import { ENV } from "../../utils";
import { FormGuardarEdit } from '../Fomulario';
const urlImagen=ENV.BASE_PATH;

export function Filas({producto,index,onReload, eliminar}) {
    const [show, setShow] = useState(false)

  
    const openCloseModal=()=>setShow((prevState)=>!prevState);
    return (
    <>
    <tr>
            <td>{index+1}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.unidad}</td>
            <td><Image src={`${urlImagen}/${producto.imagep}`} style={{width:"50px", height:"50px"}} roundedCircle/></td>
            <td>
              <Button variant="success" onClick={openCloseModal}>Editar</Button>
            </td>
            <td>
              <Button variant="danger" onClick={()=>eliminar(producto._id)}>Eliminar</Button>
            </td>
          </tr>
           <Modal show={show} onHide={openCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Guardar producto</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <FormGuardarEdit producto={producto} Reload={onReload} closeModal={openCloseModal} />
                  </Modal.Body>
                 
                </Modal>
          </>
  )
}
