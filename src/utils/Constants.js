import Axios from "../services/Axios";

const localH="http://localhost:4000/api";
const basePath="http://localhost:4000"

export const ENV={
    BASE_PATH:basePath,
    BASE_API:localH,
    API_ROUTES:{
        CREATEPRODUCTO:"/createproduct",
        GETPRODUCTO:"/getproducto",
        DELPRODUCTO:"/delproducto",
    }
}