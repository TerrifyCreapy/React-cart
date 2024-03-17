import { FC, useContext } from "react";
import { Group, SplitLayout, SplitCol, Text, Button } from "@vkontakte/vkui";
import Counter from "components/common/Counter";
import { CounterContext, CounterContextType } from "pages/MainPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
  const { onRemove } = useContext(CounterContext) as CounterContextType;

  function onIncreaseCount() {
    onChangeCount(id, +1);
  }

  function onDecreaseCount() {
    onChangeCount(id, -1);
  }

  function onRemoveItem() {
    onRemove(id);
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
          <Button onClick={onRemoveItem} appearance="negative">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
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
