import { useEffect, useRef, useState } from "react";
import FormContainer from "../../components/formPageContainer/formPageContainer";
import Input from "../../components/input/input";
import style from "./newPassword.module.scss";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <FormContainer
          title={"New password"}
          btnTitle={"Set password"}
          onSubmit={() => {}}
        >
          <div>
            <Input
              title={"Password"}
              placeholder={"Your password"}
              ref={inputRef}
              value={password}
              onСhange={setPassword}
            />
            <Input
              title={"Confirm password"}
              placeholder={"Confirm your password"}
              onСhange={setConfirmPassword}
              value={confirmPassword}
            />
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default NewPassword;
