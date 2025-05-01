import { ENV } from "../utils";
//import Axios from "../services/Axios";
import Axios from "axios";

export class Producto {
  baseApi = ENV.BASE_API;

  async createProduct(data) {
    try {
      // console.log(data);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        // console.log(key);
        formData.append(key, data[key]);
      });

      if (data.imagenFile) {
        formData.append("imagep", data.imagenFile);
      }

      const url= `${this.baseApi}/${ENV.API_ROUTES.CREATEPRODUCTO}`

      const response= await Axios.post(url,formData);
      if(response.status===200) return response;

     
    } catch (error) {
      throw error;
    }
  }

  async buscaProducto() {
    const url = `${this.baseApi}/${ENV.API_ROUTES.GETPRODUCTO}`;
    const buscPro = await Axios.get(url);
    return buscPro.data;
  }

  async delProducto(id){
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.DELPRODUCTO}/${id}`;
      const response=await Axios.delete(url);
      if(response.status===200) return response;
    } catch (error) {
      throw error;
    }
  }
}
