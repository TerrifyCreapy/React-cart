import { makeAutoObservable } from "mobx";
import ItemsStore from "./ItemsStore/ItemsStore";

class Store {
  itemsStore: ItemsStore;

  constructor() {
    this.itemsStore = new ItemsStore(this);
    makeAutoObservable(this);
    console.debug(this, " Store.ts");
  }
}

export default Store;
