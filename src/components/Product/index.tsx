import { FC } from "react";
import { Card, Image, Text } from "@vkontakte/vkui";

import ProductCount from "components/ProductCount";

import styles from "./Product.module.scss";

type ProductProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  totalCount: number;
  image: string;

  onChangeCount: (id: number, value: number) => void;
};

const Product: FC<ProductProps> = ({
  id,
  title,
  description,
  price,
  totalCount,
  image,
  onChangeCount,
}) => {
  return (
    <Card className={styles.product}>
      <Image src={image} size={180} alt="img"></Image>
      <Text className={styles.product__text} weight="1">
        {title}
      </Text>
      <Text className={styles.product__text} width={"30%"}>
        {description}
      </Text>
      <ProductCount
        id={id}
        onChangeCount={onChangeCount}
        price={price}
        totalCount={totalCount}
        currency="руб."
      />
    </Card>
  );
};
export default Product;
