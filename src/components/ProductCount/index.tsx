import { FC } from "react";
import { Group, SplitLayout, SplitCol, Text } from "@vkontakte/vkui";
import Counter from "components/common/Counter";

type ProductCountProps = {
  id: number;
  totalCount: number;
  price: number;
  currency?: string;
  onChangeCount: (id: number, value: number) => void;
};

const ProductCount: FC<ProductCountProps> = ({
  id,
  totalCount,
  price,
  currency = "руб.",
  onChangeCount,
}) => {
  function onIncreaseCount() {
    onChangeCount(id, +1);
  }

  function onDecreaseCount() {
    onChangeCount(id, -1);
  }

  return (
    <Group style={{ width: "100%", padding: "15px 0" }}>
      <SplitLayout style={{ alignItems: "center" }}>
        <SplitCol>
          <Counter
            count={totalCount}
            onDecrease={onDecreaseCount}
            onIncrease={onIncreaseCount}
          />
        </SplitCol>
        <SplitCol>
          <Text>
            {price} {currency}
          </Text>
        </SplitCol>
      </SplitLayout>
    </Group>
  );
};
export default ProductCount;
