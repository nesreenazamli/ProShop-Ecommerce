import { MainContainer, SpinnerContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import NotFoundPage from "./Screens/Gust/NotFoundPage/NotFoundPage";
import GuestRouter from "./Router/GuestRouter";
import UserRouter from "./Router/UserRouter";
import AuthRouter from "./Router/AuthRouter";
import { Suspense } from "react";
function App() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  const state = useSelector((state) => state);
  return (
    <MainContainer>
      <Suspense fallback={<SpinnerContainer />}>
      <NavBar />
      <Switch>
        {GuestRouter()}
        {state.userDetails.user._id ? UserRouter() : AuthRouter()}
        <Route key={600} path={"*"}>
          <NotFoundPage />
        </Route>
      </Switch>
      </Suspense>
    </MainContainer>
  );
}

export default App;
