import IProduct from "interfaces/entities/Product";
import instance from "./default";

class ProductsAPI {
  public static async getProducts() {
    const response = (await instance.get<IProduct[]>("/?limit=5")).data;
    return response;
  }
}

export default ProductsAPI;
