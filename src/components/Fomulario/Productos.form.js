import * as YUP from "yup";

export function initialValues(){
    return{
        nombre: "",
        precio: "",
        cantidad: "",
        unidad: "",
        imagen: "",
    }
}

export function validationSchema(){
    return YUP.object({
        nombre:YUP.string(),
        precio: YUP.number(),
        cantidad: YUP.number(),
        unidad: YUP.string(),
        imagen: YUP.string()
    })
}