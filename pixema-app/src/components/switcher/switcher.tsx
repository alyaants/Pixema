import { FC, useCallback, useEffect, useState } from "react";
import Switch from "react-switch";
import style from "./switcher.module.scss";
import { useThemeContext } from "../context/theme/context";
import { Theme } from "../../@types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setThemeValue } from "../../redux/reducers/themeSlicer";

type SwitchProps = {
  disabled?: boolean;
};

const Switcher: FC<SwitchProps> = ({ disabled }) => {
  const { themeValue, onChangeTheme } = useThemeContext();
  const dispatch = useDispatch();

  const [switchState, setSwitchState] = useState<boolean | null>(null);

  const onChange = useCallback(
    (checked: boolean) => {
      setSwitchState(checked);
      const newTheme = checked ? Theme.Light : Theme.Dark;
      onChangeTheme(newTheme);
      dispatch(setThemeValue(newTheme));
      localStorage.setItem("Theme", JSON.stringify(newTheme));
    },
    [onChangeTheme, dispatch]
  );

  useEffect(() => {
    const initializeTheme = async () => {
      // Проверяем сохраненную тему в localStorage
      const savedTheme = localStorage.getItem("Theme");
      if (savedTheme) {
        setSwitchState(JSON.parse(savedTheme) === Theme.Light);
        onChangeTheme(JSON.parse(savedTheme));
        dispatch(setThemeValue(JSON.parse(savedTheme)));
      } else {
        // Если тема не сохранена, устанавливаем светлую тему по умолчанию
        setSwitchState(true);
      }
    };

    initializeTheme();
  }, [onChangeTheme, dispatch]);

  if (switchState === null) {
    // Пока идет инициализация, можно вернуть заглушку или null
    return null;
  }

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
        checkedIcon={false}
        uncheckedIcon={false}
        disabled={disabled}
        onChange={onChange}
        checked={switchState}
      />
    </div>
  );
};

export default Switcher;
