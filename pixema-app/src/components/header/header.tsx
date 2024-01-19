import { Outlet } from "react-router-dom";
import Links from "../links/links";
import Search from "../search/search";
import UserName from "../userName/userName";
import style from "./header.module.scss";
import { Logo } from "../assets/icons/logo/logo";


const Header = () => {

  return (
    <div className={style.headerContainerMain}>
      <div className={style.headerContainer}>
        <Logo />
        <div className={style.search}>
          <Search  disabled={false}  />
        </div>
        <UserName username={"Nastya Pralich"} />
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
