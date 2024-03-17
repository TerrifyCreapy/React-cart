import { makeAutoObservable } from "mobx";
import ProductsAPI from "api/products_api";
import IProduct from "interfaces/entities/Product";
import ICartProduct from "interfaces/entities/CartProduct";

class ItemsStore {
  items: ICartProduct[] = [];
  totalPrice: number = 0;
  isLoading: boolean = true;

  rootStore: unknown;

  constructor(rootStore: unknown) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async fetchItems() {
    this.setLoading(true);
    const data = await ProductsAPI.getProducts();
    this.setItems(data);
    this.setLoading(false);
  }

  setTotalPrice(value: number) {
    this.totalPrice = value;
  }

  setItems(items: IProduct[]) {
    this.items = items.map((e: IProduct) => {
      return {
        id: e.id,
        product: { ...e, price: +(e.price * 91.64).toFixed(2) },
        count: 1,
      } as ICartProduct;
    });
    this.calculateTotalPrice();
  }

  removeItems(id: number) {
    const newItems = this.items.filter((e: ICartProduct) => {
      return e.id !== id;
    });
    this.items = newItems;
    this.calculateTotalPrice();
  }

  setLoading(value: boolean) {
    this.isLoading = value;
  }

  getItems() {
    return this.items;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getLoading() {
    return this.isLoading;
  }

  updateCount(id: number, changeValue: number) {
    const newItems = this.items.map((e: ICartProduct) => {
      if (!(e.id === id)) return e;
      this.setTotalPrice(
        +(this.totalPrice + changeValue * e.product.price).toFixed(2),
      );
      return {
        ...e,
        count: e.count + changeValue,
      };
    });
    this.items = newItems;
  }

  calculateTotalPrice() {
    const total = this.items.reduce((res: number, elem: ICartProduct) => {
      return res + elem.count * elem.product.price;
    }, 0);
    this.setTotalPrice(+total.toFixed(2));
  }
}

export default ItemsStore;
