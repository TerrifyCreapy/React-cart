import { ReactNode } from "react";
import { Route } from "react-router";

import IBrowserRouter from "interfaces/common/IBrowserRouter";

function mapRoutes(routes: IBrowserRouter[]) {
  return routes.map((route: IBrowserRouter) => {
    const element = route.element as ReactNode;
    if (!route.outlets) {
      return <Route key={route.path} path={route.path} element={element} />;
    } else {
      const outlets = mapRoutes(route.outlets);
      return (
        <Route key={route.path} path={route.path} element={element}>
          {outlets}
        </Route>
      );
    }
  });
}

export default mapRoutes;
