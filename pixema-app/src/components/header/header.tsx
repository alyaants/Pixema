import { KeyboardEvent } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Links from "../links/links";
import UserName from "../userName/userName";
import style from "./header.module.scss";
import { Logo } from "../assets/icons/logo/logo";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import { useThemeContext } from "../context/theme/context";
import { RoutesList } from "../../pages/router";
import Button, { ButtonTypes } from "../button/button";
import { UserIcon } from "../assets/icons/user/user";
import classNames from "classnames";
import { Theme } from "../../@types";
import { useState } from "react";
import { SearchIcon } from "../assets/icons/searchIcon";
import { FilterIcon } from "../assets/icons/filter/filter";
import Input from "../input/input";
import { getSearchedMovies } from "../../redux/reducers/movieSlice";

const Header = () => {
  const { themeValue } = useThemeContext();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const userInfo = useSelector(AuthSelectors.getUserInfo);

  const onLoginButtonClick = () => {
    navigate(RoutesList.SignIn);
  };

  const [isSearch, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSearchOpened = () => {
    setSearch(!isSearch);
    if (isSearch && inputValue) {
      console.log(444);
      dispatch(getSearchedMovies(inputValue))
      console.log('sffe');
      navigate(`/movies/${inputValue}`)
      setInputValue("");
      console.log(558754);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchOpened();
    }
  };

  return (
    <div
      className={classNames(style.headerContainerMain, {
        [style.lightContainer]: themeValue === Theme.Light,
      })}
    >
      <div className={style.headerContainer}>
        <Logo />
        <div className={style.search}>
      
            <div className={style.searchWrapper}>
              <Input
                value={inputValue}
                onСhange={setInputValue}
                placeholder="Search..."
                className={style.search}
                onKeyDown={onKeyDown}
              />
              <div
                className={classNames(style.magnifier)}
                onClick={handleSearchOpened}
              >
                <SearchIcon />
              </div>
              <div className={classNames(style.filter)}>
                <FilterIcon />
              </div>
            </div>
          
          
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
        <div
          className={classNames(style.links, {
            [style.lightLinks]: themeValue === Theme.Light,
          })}
        >
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
