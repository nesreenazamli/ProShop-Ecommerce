import { Route } from "react-router";

import { lazy } from "react";

const Orders = lazy(() => import("../Screens/User/Orders/Orders"));
const Order = lazy(() => import("../Screens/User/Order/Order"));
const Payment = lazy(() => import("../Screens/User/Payment/Payment"));
const Profile = lazy(() => import("../Screens/User/Profile/Profile"));
const UpdateProfilePage = lazy(() =>
  import("../Screens/User/UpdateProfilePage/UpdateProfilePage")
);

export default function UserRouter() {
  return [
    <Route key={54} path={"/profile"} exact={true} component={Profile} />,
    <Route key={56} path={"/orders"} exact={true} component={Orders} />,
    <Route key={58} path={"/order/:id"} exact={true} component={Order} />,
    <Route
      key={55}
      path={"/update-profile"}
      exact={true}
      component={UpdateProfilePage}
    />,
    <Route
      key={405}
      path={"/proceed-checkout/shipping-address"}
      exact={true}
      component={Payment}
    />,
    <Route
      key={402}
      path={"/proceed-checkout/place-order"}
      exact={true}
      component={Payment}
    />,
  ];
}
