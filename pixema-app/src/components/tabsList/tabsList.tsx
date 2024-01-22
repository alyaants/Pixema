import { ReactElement } from "react";
import style from "./tabsList.module.scss";
import classNames from "classnames";
import { FavoritesIcon } from "../assets/icons/favorite/favorite";
import { ShareIcon } from "../assets/icons/share/share";

// interface ITab {
//   title: string | ReactElement;

// };

type TabsListProps = {
  // content: ITab[];
  onClick?: () => void;
  className?: string;
  isActive: boolean;
};

const TabsList = (props: TabsListProps) => {
  return (
    <div className={style.tabsListContainer}>
    
        <div onClick={props.onClick} className={classNames(style.tab, props.isActive ? style.tab : style.disabled)}><FavoritesIcon /></div>
        <div onClick={props.onClick} className={classNames(style.tab, props.isActive ? style.tab : style.disabled)}><ShareIcon /></div>

    </div>
  );
};

export default TabsList;
