import { useEffect, FC, useState } from "react";
import Switch from "react-switch";
import style from "./switcher.module.scss";
import { useThemeContext } from "../context/theme/context";
import { LOCAL_STORAGE_THEME } from "../../utiles/constants";
import { Theme } from "../../@types";
import classNames from "classnames";

type SwitchProps = {
  disabled?: boolean;
  onClick?: () => void;
  state?: boolean;
};
const Switcher: FC<SwitchProps> = ({ disabled, onClick, state }) => {
  const { themeValue, onChangeTheme } = useThemeContext();
  const [switchState, setSwitchState] = useState(true);
  // let lokStorGetTheme = localStorage.getItem(LOCAL_STORAGE_THEME)

  useEffect(() => {
    const lokStorGetTheme = localStorage.getItem(LOCAL_STORAGE_THEME);
    if (lokStorGetTheme) {
      const savedTheme = JSON.parse(lokStorGetTheme);

      setSwitchState(savedTheme === Theme.Dark); // Установите начальное состояние свитчера на основе сохраненной темы
      onChangeTheme(savedTheme); // Примените сохраненную тему
    }
  }, []);

  const handleChange = () => {
    // Изменяем состояние свитчера
    setSwitchState((prevState: any) => !prevState);

    const newTheme = switchState ? Theme.Light : Theme.Dark;
    onChangeTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME, JSON.stringify(newTheme));
  };

  return (
    <div
      className={classNames(style.containerSettings, {
        [style.lightContainer]: themeValue === Theme.Light,
      })}
    >
      <Switch
        className={style.switcher}
        width={32}
        height={20}
        handleDiameter={16}
        activeBoxShadow="none"
        offColor={themeValue ? "#80858B" : "#AFB2B6"}
        onColor={disabled ? "#7B61FF" : "#917CFF"}
        // offColor={'#AFB2B6'}
        // onColor={'#917CFF'}
        checkedIcon={false}
        uncheckedIcon={false}
        disabled={disabled}
        onChange={handleChange}
        checked={switchState}
      />
    </div>
  );
};

export default Switcher;
