import classNames from "classnames";
import styles from "./switcher.module.scss";

interface SwitchProps {
  disabled?: boolean;
  onClick: () => void;
  state: boolean;
};

const Switcher = (props:SwitchProps) => {
  return (
    <div
      className={classNames(styles.switchWrapper, {
        [styles.disabledSwitchWrapperOff]: props.disabled,
        [styles.disabledSwitchWrapperOn]: props.disabled && props.state,
        [styles.switcherOnWrapper]: props.state && !props.disabled,
      })}
      onClick={props.disabled ? () => {} : props.onClick}
    >
      <div className={styles.switcher}></div>
    </div>
  );
};

export default Switcher;