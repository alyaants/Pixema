import { useEffect, useRef, useState } from "react";
import FormContainer from "../../components/formPageContainer/formPageContainer";
import Input from "../../components/input/input";
import style from "../signIn/signIn.module.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
          title={"Sign Up"}
          btnTitle={"Sign Up"}
          onSubmit={() => {}}
          additionalText={
            <div className={style.additionalText}>
              {"Already have an account?"}{" "}
              <span className={style.signIn}> Sign In</span>
            </div>
          }
        >
          <div>
            <Input
              title={"Name"}
              placeholder={"Your  name"}
              onСhange={setName}
              value={name}
              ref={inputRef}
            />
            <Input
              title={"Email"}
              placeholder={"Your email"}
              onСhange={setEmail}
              value={email}
            />
            <Input
              title={"Password"}
              placeholder={"Your password"}
              onСhange={setPassword}
              value={password}
            />
            <Input
              title={"Confirm password"}
              placeholder={"Confirm password"}
              onСhange={setConfirmPassword}
              value={confirmPassword}
            />
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default SignUp;
