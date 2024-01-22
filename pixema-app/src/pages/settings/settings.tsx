import { useEffect, useRef, useState } from "react";
import style from "./settings.module.scss";
import Input from "../../components/input/input";
import Title from "../../components/title/title";
import Button, { ButtonTypes } from "../../components/button/button";
import Switcher from "../../components/switcher/switcher";
import { useThemeContext } from "../../components/context/theme/context";
import { Theme } from "../../@types";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { themeValue } = useThemeContext();

  const onThemeClick = (value: Theme) => () => {
    onThemeClick(value);
    // localStorage.setItem(Theme, value);
  };
  const isDark = themeValue === Theme.Dark;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className={style.settingsContainer}>
      <div className={style.profile}>
        <Title title={"Profile"} />
        <div className={style.profilInps}>
          <div className={style.input}>
            <Input
              placeholder={"Name"}
              onСhange={setName}
              value={name}
              ref={inputRef}
              title="Name"
              className="input"
            />
          </div>

          <Input
            placeholder={"Email"}
            onСhange={setEmail}
            value={email}
            title="Email"
          />
        </div>
      </div>
      <div className={style.password}>
        <Title title={"Password"} />
        <div className={style.passwordInps}>
          <Input
            placeholder={"Password"}
            onСhange={setPassword}
            value={password}
            title="Password"
          />
          <div className={style.passwordInp}>
            <Input
              placeholder={"New password"}
              onСhange={setNewPassword}
              value={newPassword}
              title="New password"
            />
            <Input
              placeholder={"Confirm password"}
              onСhange={setConfirmPassword}
              value={confirmPassword}
              title="Confirm password"
            />
          </div>
        </div>
      </div>
      <div className={style.colorMode}>
        <Title title={"Color mode"} />
        <div className={style.colorModeInf}>
          <div className={style.colorText}>
            <span>Dark</span>
            <p>Use dark thema</p>
          </div>
          <div className={style.colorSwitcher}>
            <Switcher />
          </div>
        </div>
      </div>
      <div className={style.buttons}>
        <Button
          type={ButtonTypes.Secondary}
          title={"Cancel"}
          onClick={() => {}}
          className={style.cancelBtn}
        />
        <Button
          type={ButtonTypes.Primary}
          title={"Save"}
          onClick={() => {}}
          className={style.saveBtn}
        />
      </div>
    </div>
  );
};
export default Settings;
