import * as YUP from "yup";

export function initialValues(producto){
    return{
        nombre: producto?.nombre || "",
        precio: producto?.precio || "",
        cantidad: producto?.cantidad || "",
        unidad: producto?.unidad ||"",
        imagep: producto?.imagep ||"",
        imagenFile:null
    }
}

export function validationSchema(){
    return YUP.object({
        nombre:YUP.string(),
        precio: YUP.number(),
        cantidad: YUP.number(),
        unidad: YUP.string(),
        imagep: YUP.string()
    })
}