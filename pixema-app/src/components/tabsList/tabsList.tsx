import { ReactElement } from "react";
import style from "./tabsList.module.scss";
import classNames from "classnames";

interface ITab {
  title: string;
  isActive: boolean;
};

type TabsListProps = {
  content: ITab[];
  onClick?: () => void;
  className?: string;
};

const TabsList = (props: TabsListProps) => {
  return (
    <div className={style.tabsListContainer}>
      {props.content.map((item) => (
        <div onClick={props.onClick} className={classNames(style.tab, item.isActive ? style.tab : style.disabled)}>{item.title}</div>
      ))}
    </div>
  );
};

export default TabsList;
