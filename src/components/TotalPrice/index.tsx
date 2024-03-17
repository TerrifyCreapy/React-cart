import { FC } from "react";
import { Text } from "@vkontakte/vkui";

type TotalPriceProps = {
  value: number;
};

const TotalPrice: FC<TotalPriceProps> = ({ value }) => {
  return <Text style={{ position: "sticky" }}>Итого: {value} руб.</Text>;
};

export default TotalPrice;
