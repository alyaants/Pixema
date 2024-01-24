import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import ResetPassword from "./resetPassword/resetPassword";
import NewPassword from "./newPassword/newPassword";
import Header from "../components/header/header";
import AllMovies from "./allMovies/allMovies";
import SelectedMovie from "./allMovies/selectedMovie/selectedMovie";
import Settings from "./settings/settings";
import RegistrationConfirmation from "./registrationConfirmation/registrationConfirmation";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, getUserInfo } from "../redux/reducers/authSlice";
import { useEffect } from "react";
import Search from "./search/search";

export enum RoutesList {
  AllMovies = "/",
  SignUp = "/sign-up",
  SignIn = "/sign-in",
  RegistrationConfirmation = "/activate/:uid/:token",
  ResetPassword = "/reset-password",
  NewPassword = "/new-password",
  SelectedMovie = "/movie/:id",
  Settings = "/settings",
  Search = "/movies/:query ",
  Default = "*",
}

const Router = () => {
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
    }
  }, [isLoggedIn]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.AllMovies} element={<Header />}>
          <Route path={RoutesList.AllMovies} element={<AllMovies />} />;
          <Route path={RoutesList.SelectedMovie} element={<SelectedMovie />} />;
          <Route path={RoutesList.Settings} element={<Settings />} />;
        </Route>
        <Route
          path={RoutesList.RegistrationConfirmation}
          element={
            !isLoggedIn ? (
              <RegistrationConfirmation />
            ) : (
              <Navigate to={RoutesList.AllMovies} />
            )
          }
        />
        <Route path={RoutesList.SignUp} element={<SignUp />} />;
        <Route path={RoutesList.SignIn} element={<SignIn />} />;
        <Route path={RoutesList.ResetPassword} element={<ResetPassword />} />;
        <Route path={RoutesList.NewPassword} element={<NewPassword />} />;
        <Route path={RoutesList.Search} element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
