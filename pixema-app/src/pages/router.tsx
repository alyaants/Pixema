import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./signIn/signIn"
import SignUp from "./signUp/signUp"
import ResetPassword from "./resetPassword/resetPassword"
import NewPassword from "./newPassword/newPassword"
import Header from "../components/header/header"

export enum RoutesList {
    AllMovies = "/",
    SignUp = "/sign-up",
    SignIn = "/sign-in",
    ResetPassword = "/reset-password",
    NewPassword = "/new-password",
    SelectedMovie = "/hdd",
    Default = "*",
  }

const Router = () =>{
    return(
<BrowserRouter>
<Routes>
 <Route path={RoutesList.AllMovies} element={<Header />} />;
 <Route path={RoutesList.SignUp} element={<SignUp />} />;
 <Route path={RoutesList.SignIn} element={<SignIn />} />;
 <Route path={RoutesList.ResetPassword} element={<ResetPassword />} />;
 <Route path={RoutesList.NewPassword} element={<NewPassword />} />;
</Routes>
</BrowserRouter>
    )
}

export default Router