import { FC } from "react";
import { ButtonGroup, Button, Text } from "@vkontakte/vkui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Counter.module.scss";

type CounterProps = {
  count: number;
  minValue?: number;
  maxValue?: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const Counter: FC<CounterProps> = ({
  count,
  minValue = 1,
  maxValue = 10,
  onIncrease,
  onDecrease,
}) => {
  return (
    <ButtonGroup className={styles.__container}>
      <Button
        align="center"
        disabled={count > minValue ? false : true}
        onClick={onDecrease}
        className={styles.__btn}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Text>{count}</Text>
      <Button
        align="center"
        disabled={count < maxValue ? false : true}
        onClick={onIncrease}
        className={styles.__btn}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </ButtonGroup>
  );
};
export default Counter;
