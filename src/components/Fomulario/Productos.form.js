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
        nombre:YUP.string().required(true),
        precio: YUP.number().required(true),
        cantidad: YUP.number().required(true),
        unidad: YUP.number(),
        imagen: YUP.string()
    })
}