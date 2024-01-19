import { useEffect, useRef, useState } from "react";
import FormContainer from "../../components/formPageContainer/formPageContainer";
import Input from "../../components/input/input";
import style from "./resetPassword.module.scss";

type ResetPasswordProps = {
  infoText?: string;
};

const ResetPassword = (props: ResetPasswordProps) => {
  const [email, setEmail] = useState("");
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
          title={"Reset Password"}
          btnTitle={"Reset"}
          onSubmit={() => {}}
          className={style.formContainer}
        >
          <Input
            title={"Email"}
            placeholder={"Your email"}
            value={email}
            onСhange={setEmail}
            ref={inputRef}
          />
        </FormContainer>
      </div>
    </div>
  );
};

export default ResetPassword;
