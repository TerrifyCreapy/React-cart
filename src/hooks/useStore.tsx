import { useContext } from "react";
import { StoreContext } from "..";

type UseStoreProps = {
  stores?: string | string[];
};

const useStore = (stores?: string | string[]) => {
  const store = useContext(StoreContext);
  if (!stores) return store;
  if (Array.isArray(stores)) {
    const result = {};
    stores
      .filter((e: string) => (store as any)[e])
      .forEach((e: string) => {
        (result as any)[e] = (store as any)[e];
      });
    return result;
  }
  return (store as any)[stores];
};

export default useStore;
