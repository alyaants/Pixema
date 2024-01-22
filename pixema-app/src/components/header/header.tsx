import { Outlet, useNavigate } from "react-router-dom";
import Links from "../links/links";
import Search from "../search/search";
import UserName from "../userName/userName";
import style from "./header.module.scss";
import { Logo } from "../assets/icons/logo/logo";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, logoutUser } from "../../redux/reducers/authSlice";
import { useThemeContext } from "../context/theme/context";
import { RoutesList } from "../../pages/router";
import Button, { ButtonTypes } from "../button/button";
import { UserIcon } from "../assets/icons/user/user";

const Header = () => {
  const { themeValue } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const userInfo = useSelector(AuthSelectors.getUserInfo);

  const onLoginButtonClick = () => {
    navigate(RoutesList.SignIn);
  };
  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={style.headerContainerMain}>
      <div className={style.headerContainer}>
        <Logo />
        <div className={style.search}>
          <Search disabled={false} />
        </div>
        {isLoggedIn && userInfo ? (
          <UserName username={userInfo.username} />
        ) : (
          <Button
            type={ButtonTypes.Primary}
            title={<UserIcon />}
            onClick={onLoginButtonClick}
            className={style.userBtn}
          />
        )}
      </div>
      <div className={style.content}>
        <div className={style.links}>
          <Links />
          <footer>© All Rights Reserved</footer>
        </div>
        <div className={style.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Header;
