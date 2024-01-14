import classNames from "classnames";
import style from "./links.module.scss";
import { ReactElement } from "react";
import { HomeIcon } from "../assets/icons/home/home";
import { TrendsIcon } from "../assets/icons/trends/trends";
import { FavoritesIcon } from "../assets/icons/favorite/favorite";
import { SettingIcon } from "../assets/icons/settings/settings";

type LinksProps = {
  onClick?: () => void;
  className?: string;
};

const Links = (props: LinksProps) => {
  return (
    <div className={style.linksContainer}>
      <div className={style.link}>
        <div className={style.linkIcon}>
          <HomeIcon />
        </div>
        <div className={style.linkText}>Home</div>
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
        <div className={style.linkText}>Favorites</div>
      </div>

      <div className={style.link}>
        <div className={style.linkIcon}>
          <SettingIcon />
        </div>
        <div className={style.linkText}>Settings</div>
      </div>
    </div>
  );
};

export default Links;
