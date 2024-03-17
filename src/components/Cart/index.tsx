import { FC } from "react";
import {
  Div,
  SplitLayout,
  SplitCol,
  useAdaptivityConditionalRender,
  Card,
} from "@vkontakte/vkui";
import TotalPrice from "components/TotalPrice";
import ICartProduct from "interfaces/entities/CartProduct";
import Product from "components/Product";

import styles from "./Cart.module.scss";

type CartProps = {
  products: ICartProduct[];
  getTotalPrice: () => number;
  update: (id: number, value: number) => void;
};

const Cart: FC<CartProps> = ({ products, getTotalPrice, update }) => {
  const { viewWidth } = useAdaptivityConditionalRender();

  const items = !products.length
    ? null
    : products.map((e: ICartProduct) => {
        const element = e.product;
        return (
          <Product
            key={element.id}
            totalCount={e.count}
            {...element}
            onChangeCount={update}
          />
        );
      });

  return (
    <Div>
      <SplitLayout className={styles.products__container}>
        <SplitCol
          width={"66%"}
          style={{ display: "flex", flexDirection: "column", gap: 30 }}
          autoSpaced
        >
          {items}
        </SplitCol>
        {viewWidth.tabletPlus && (
          <SplitCol
            width="34%"
            autoSpaced
            className={`${viewWidth.tabletPlus.className} ${styles["right__column"]}`}
          >
            <TotalPrice value={getTotalPrice()} />
          </SplitCol>
        )}
      </SplitLayout>
      {viewWidth.tabletMinus && (
        <Card
          className={`${viewWidth.tabletMinus.className} ${styles.bottom__block}`}
          style={{
            position: "sticky",
            bottom: 0,
            height: "100%",
            textAlign: "center",
            padding: "10px 5px",
            marginTop: 10
          }}
        >
          <TotalPrice value={getTotalPrice()} />
        </Card>
      )}
    </Div>
  );
};
export default Cart;
