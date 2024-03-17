import { FC } from "react";
import { Routes } from "react-router";
import { Div } from "@vkontakte/vkui";

import routes from "routes/routes";
import mapRoutes from "utils/mapRoutes";

const App: FC = () => {
  alert("working")
  return <Routes>{mapRoutes(routes)}</Routes>;
};

export default App;
