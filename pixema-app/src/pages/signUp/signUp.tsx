import FormContainer from "../../components/formPageContainer/formPageContainer";
import Input from "../../components/input/input";
import style from "../signIn/signIn.module.scss";

const SignUp = () => {
  return (
    <div className={style.container}>
      <div className={style.formContainer}>
    <FormContainer
      title={"Sign Up"}
      btnTitle={"Sign Up"}
      onSubmit={() => {}}
      additionalText={
        <div className={style.additionalText}>{"Already have an account?"} <span className={style.signIn}> Sign In</span></div>
      }
    >
      <div>
        <Input title={"Name"} placeholder={"Your  name"} onСhange={() => {}} />
        <Input
          title={"Email"}
          placeholder={"Your email"}
          onСhange={() => {}}
        />
        <Input title={"Password"} placeholder={"Your password"} onСhange={() => {}} />
        <Input title={"Confirm password"} placeholder={"Confirm password"} onСhange={() => {}} />

      </div>
    </FormContainer>
    </div>
    </div>
  );
};

export default SignUp;
