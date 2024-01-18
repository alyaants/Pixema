import { Outlet } from "react-router-dom";
import { Logo } from "../assets/icons/logo/logo";
import Links from "../links/links";
import Search from "../search/search";
import UserName from "../userName/userName";
import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.headerContainerMain}>
      <div className={style.headerContainer}>
        <Logo />
        <Search
          placeholder={"search"}
          isDisabled={false}
          className={style.search}
        />
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
