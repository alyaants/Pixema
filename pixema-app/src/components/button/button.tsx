import { ReactElement } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
  Error = "error",
}
interface ButtonProps {
  type: ButtonTypes;
  title: string | ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
const Button = (props: ButtonProps) => {
  const buttonStyle = styles[props.type];
  return (
    <div
      onClick={props.onClick}
      className={classNames(buttonStyle, props.className, {
        [styles.disabled]: props.disabled,
      })}
    >
      {props.title}
    </div>
  );
};

export default Button;
