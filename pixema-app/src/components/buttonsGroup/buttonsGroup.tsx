import classNames from "classnames";
import style from "./buttonsGroup.module.scss";
import { FavoritesIcon } from "../assets/icons/favorite/favorite";

type ButtonGroupProps = {
  isActive: boolean;
  onClick?: () => void;
  className?: string;
};

const ButtonGroup = (props: ButtonGroupProps) => {
  return (
    <div className={style.buttonsGroupContainer}>
      <div className={classNames(style.icon , props.isActive? style.icon : style.disabled)}>
        <FavoritesIcon />
      </div>
      <div className={classNames(style.icon, props.isActive? style.icon : style.disabled)}>
        <FavoritesIcon />
      </div>
    </div>
  );
};

export default ButtonGroup;
