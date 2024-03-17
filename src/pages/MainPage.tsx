import { FC, createContext, useLayoutEffect } from "react";
import { observer } from "mobx-react-lite";

import useStore from "hooks/useStore";

import Cart from "components/Cart";
import Loader from "components/common/Loader";

export type CounterContextType = {
  onRemove: (id: number) => void;
};

export const CounterContext = createContext<CounterContextType | null>(null);

const MainPage: FC = () => {
  const store = useStore("itemsStore");

  useLayoutEffect(() => {
    store.fetchItems();
  }, [store]);

  const items = store.getItems();

  if (store.getLoading()) {
    console.log(store.getLoading());
    return <Loader />;
  }

  return (
    <CounterContext.Provider
      value={{ onRemove: store.removeItems.bind(store) }}
    >
      <Cart
        update={store.updateCount.bind(store)}
        getTotalPrice={store.getTotalPrice.bind(store)}
        products={items}
      />
    </CounterContext.Provider>
  );
};
export default observer(MainPage);
