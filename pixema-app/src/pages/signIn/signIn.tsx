import FormContainer from "../../components/formPageContainer/formPageContainer";
import Input from "../../components/input/input";
import style from "./signIn.module.scss";

const SignIn = () => {
  return (
    <FormContainer title={"dfghjkl"} btnTitle={""} onSubmit={() => {}}>
      <div>
        <Input placeholder={"email"} onСhange={() => {}} />
        <Input placeholder={"password"} onСhange={() => {}} />
      </div>
    </FormContainer>
  );
};

export default SignIn;
