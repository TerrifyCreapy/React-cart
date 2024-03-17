import IBrowserRouter from "interfaces/common/IBrowserRouter";
import Routes from "constants/routes";
import MainPage from "pages/MainPage";

const routes: IBrowserRouter[] = [
  {
    name: "main_page",
    path: Routes.BASE_PATH,
    element: <MainPage />,
  },
];

export default routes;
