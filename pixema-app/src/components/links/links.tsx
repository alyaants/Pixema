import style from "./links.module.scss";
import { HomeIcon } from "../assets/icons/home/home";
import { TrendsIcon } from "../assets/icons/trends/trends";
import { FavoritesIcon } from "../assets/icons/favorite/favorite";
import { SettingsIcon } from "../assets/icons/settings/settings";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../pages/router";

type LinksProps = {
  onClick?: () => void;
  className?: string;
};

const Links = (props: LinksProps) => {
  const navigate = useNavigate();

  const onSettingsClick = () => {
    navigate(RoutesList.Settings);
  };
  const onHomeClick = () => {
    navigate(RoutesList.AllMovies);
  };

  const onFavouriteClick = () =>{
    navigate(RoutesList.Favourites);
  }
  return (
    <div className={style.linksContainer}>
      <div className={style.link}>
        <div className={style.linkIcon} onClick={onHomeClick}>
          <HomeIcon />
        </div>
        <div className={style.linkText} onClick={onHomeClick}>Home</div>
      </div>

      <div className={style.link}>
        <div className={style.linkIcon}>
          <TrendsIcon />
        </div>
        <div className={style.linkText}>Trends</div>
      </div>

      <div className={style.link}>
        <div className={style.linkIcon}>
          <FavoritesIcon />
        </div>
        <div className={style.linkText} onClick={onFavouriteClick}>Favorites</div>
      </div>

      <div className={style.link}>
        <div className={style.linkIcon} onClick={onSettingsClick}>
          <SettingsIcon />
        </div>
        <div className={style.linkText} onClick={onSettingsClick}>
          Settings
        </div>
      </div>
    </div>
  );
};

export default Links;
