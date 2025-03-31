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

      if(data.imagenFile){
        formData.append("imagep",data.imagenFile);
      }
 
   
       Axios({
        method: "POST",
        url: `${this.baseApi}/${ENV.API_ROUTES.CREATEPRODUCTO}`,
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then(function (response) {
          console.log(response);
          console.log("Se agrego el producto");
        })
        .catch(function (response) {
          console.log(response);
        }); 
  
      //const url=`/${ENV.API_ROUTES.CREATEPRODUCTO}`;
      /* const params={
                method:"POST",
                body: formData
            }  */

      /* const response=await Axios.post(`${this.baseApi}/${ENV.API_ROUTES.CREATEPRODUCTO}`,formData); */
      // const result=await response.json();

      /* if(response.status!==200) throw result;
            return result; */
    } catch (error) {
      throw error;
    }
  }

  async buscaProducto(){
    const url=`${this.baseApi}/${ENV.API_ROUTES.GETPRODUCTO}`;
    const buscPro= await Axios.get(url);
    return buscPro.data;
  }


}
