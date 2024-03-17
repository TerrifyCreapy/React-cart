import IProduct from "./Product";

interface ICartProduct {
  id: number;
  product: IProduct;
  count: number;
}

export default ICartProduct;
