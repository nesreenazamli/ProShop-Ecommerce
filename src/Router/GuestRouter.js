import{ Route} from "react-router";
import { lazy } from "react";

const HomeScreen = lazy(() => import("../Screens/Gust/HomeScreen/HomeScreen"));
const Product = lazy(() => import("../Screens/Gust/Product/Product"));
const SearchPage = lazy(() => import("../Screens/Gust/SearchPage/SearchPage"));
const ShoppingCart = lazy(() => import("../Screens/User/ShoppingCart/ShoppingCart"));

export default function GuestRouter() {
  return [
    <Route key={300} path={"/"} exact={true} component={HomeScreen} />,
    <Route key={31} path={"/cart"} exact={true} component={ShoppingCart} />,
    <Route  key={32} path={"/product/:id/:name"} exact={true} component={Product} />,
    <Route  key={32}path={"/search"} exact={true} component={SearchPage} />,
  ];
}
