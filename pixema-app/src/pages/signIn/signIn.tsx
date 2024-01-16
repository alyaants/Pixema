import FormContainer from "../../components/formPageContainer/formPageContainer";
import Input from "../../components/input/input";
import style from "./signIn.module.scss";

const SignIn = () => {
  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <FormContainer
      title={"Sign In"}
      btnTitle={"Sign In"}
      onSubmit={() => {}}
      additionalText={
        <div className={style.additionalText}>{"Don’t have an account?"} <span className={style.signIn}>Sign Up</span></div>
      }
    >
      <div>
        <Input title={"Email"} placeholder={"Your email"} onСhange={() => {}} />
        <Input
          title={"Password"}
          placeholder={"Your password"}
          onСhange={() => {}}
        />
      </div>
    </FormContainer>
      </div>
      
    </div>
    
  );
};

export default SignIn;
