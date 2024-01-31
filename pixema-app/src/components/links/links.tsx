import { HomeIcon } from "../assets/icons/home/home";
import { TrendsIcon } from "../assets/icons/trends/trends";
import { FavoritesIcon } from "../assets/icons/favorite/favorite";
import { SettingsIcon } from "../assets/icons/settings/settings";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../pages/router";
import { useState } from "react";
import style from "./links.module.scss";

type LinksProps = {
  onClick?: () => void;
  className?: string;
};

const Links = (props: LinksProps) => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState("");

  const onSettingsClick = () => {
    navigate(RoutesList.Settings);
    setActiveLink("settings");
  };
  const onHomeClick = () => {
    navigate(RoutesList.AllMovies);
    setActiveLink("home");
    console.log(activeLink);
  };

  const onFavouriteClick = () => {
    navigate(RoutesList.Favourites);
    setActiveLink("favorites");
    // setActiveLink(!activeLink);
  };

  const onTrendsClick = () => {
    navigate(RoutesList.AllMovies);
    setActiveLink("trends");
  };

  return (
    <div className={style.wrap}>
      <div className={style.linksContainer}>
        <div
          className={`${style.link} ${
            activeLink === "home" ? style.activeLink : ""
          }`}
          onClick={onHomeClick}
        >
          <div className={style.linkIcon}>
            <HomeIcon />
          </div>
          <div className={style.linkText}>Home</div>
        </div>

        <div
          className={`${style.link} ${
            activeLink === "trends" ? style.activeLink : ""
          }`}
          onClick={onTrendsClick}
        >
          <div className={style.linkIcon}>
            <TrendsIcon />
          </div>
          <div className={style.linkText}>Trends</div>
        </div>

        <div
          className={`${style.link} ${
            activeLink === "favorites" ? style.activeLink : ""
          }`}
          onClick={onFavouriteClick}
        >
          <div className={style.linkIcon}>
            <FavoritesIcon />
          </div>
          <div className={style.linkText}>Favorites</div>
        </div>

        <div
          className={`${style.link} ${
            activeLink === "settings" ? style.activeLink : ""
          }`}
          onClick={onSettingsClick}
        >
          <div className={style.linkIcon}>
            <SettingsIcon />
          </div>
          <div className={style.linkText}>Settings</div>
        </div>
      </div>
      <footer className={style.footer}>© All Rights Reserved</footer>

    </div>
  );
};

export default Links;
