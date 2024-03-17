interface IBrowserRouter {
  name: string;
  path: string;
  element: unknown;
  outlets?: IBrowserRouter[];
}

export default IBrowserRouter;
