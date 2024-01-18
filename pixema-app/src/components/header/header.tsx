import { Outlet } from "react-router-dom";
import Links from "../links/links";
import Search from "../search/search";
import UserName from "../userName/userName";
import style from "./header.module.scss";
import { Logo } from "../assets/icons/logo/logo";
import Input from "../input/input";
import { useState } from "react";
import Button, { ButtonTypes } from "../button/button";
import { FilterIcon } from "../assets/icons/filter/filter";

const Header = () => {
  const [isSearch, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSearchOpened = () => {
    setSearch(!isSearch);
  };

  return (
    <div className={style.headerContainerMain}>
      <div className={style.headerContainer}>
        <Logo />
        <div className={style.search}>
          <Search placeholder={"Search..."} isDisabled={false} />
        </div>
        <UserName username={"Nastya Pralich"} />
      </div>
      <div className={style.content}>
        <div className={style.links}>
          <Links />
        </div>
        <div className={style.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Header;
