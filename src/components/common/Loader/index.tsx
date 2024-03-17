import { FC } from "react";
import { FallingLines } from "react-loader-spinner";
import { SplitCol, SplitLayout } from "@vkontakte/vkui";

import styles from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <SplitLayout>
      <SplitCol className={styles.vk_ui_loader_container}>
        <FallingLines color="#4fa94d" width="200" visible={true} />
      </SplitCol>
    </SplitLayout>
  );
};
export default Loader;
