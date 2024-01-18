import { useEffect, useRef, useState } from "react";
import FormContainer from "../../components/formPageContainer/formPageContainer";
import Input from "../../components/input/input";
import style from "./signIn.module.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          title={"Sign In"}
          btnTitle={"Sign In"}
          onSubmit={() => {}}
          additionalText={
            <div className={style.additionalText}>
              {"Don’t have an account?"}{" "}
              <span className={style.signIn}>Sign Up</span>
            </div>
          }
        >
          <div>
            <Input
              title={"Email"}
              placeholder={"Your email"}
              value={email}
              onСhange={setEmail}
              ref={inputRef}
            />
            <Input
              title={"Password"}
              placeholder={"Your password"}
              value={password}
              onСhange={setPassword}
            />
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default SignIn;
