import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Order from "../pages/Order/Order";
import Product from "../pages/Product/Product";

export const routes = [
  {
    path: "/",
    element: Home,
    isShowHeader: true,
  },
  {
    path: "/product",
    element: Product,
    isShowHeader: true,
  },
  {
    path: "/order",
    element: Order,
    isShowHeader: true,
  },
  {
    path: "*",
    element: NotFound,
    isShowHeader: false,
  },
];
