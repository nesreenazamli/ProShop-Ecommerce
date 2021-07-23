import{ Route} from "react-router";
import { lazy } from "react";

const LoginPage = lazy(() => import("../Screens/User/LoginPage/LoginPage"));
const Register = lazy(() => import("../Screens/Gust/RegisterPage/Register"));

export default function AuthRouter() {
    return (
        [
            <Route
              path={"/loginPage"}
              component={() => {
                return <LoginPage />;
              }}
            />,

            <Route
              path={"/register"}
              component={() => {
                return <Register />;
              }}
            />
        ]
    )
}
