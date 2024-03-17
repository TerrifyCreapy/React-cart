import { FC, useLayoutEffect } from "react";
import { observer } from "mobx-react-lite";

import useStore from "hooks/useStore";

import Cart from "components/Cart";
import Loader from "components/common/Loader";

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
    <Cart
      update={store.updateCount.bind(store)}
      getTotalPrice={store.getTotalPrice.bind(store)}
      products={items}
    />
  );
};
export default observer(MainPage);
