import FormContainer from "../../components/formPageContainer/formPageContainer";
import Input from "../../components/input/input";
import style from "./signIn.module.scss";

const NewPassword = () => {
  return (
    <FormContainer
      title={"New password"}
      btnTitle={"Set password"}
      onSubmit={() => {}}
    >
      <div>
        <Input
          title={"Password"}
          placeholder={"Your password"}
          onСhange={() => {}}
        />
        <Input
          title={"Confirm password"}
          placeholder={"Confirm your password"}
          onСhange={() => {}}
        />
      </div>
    </FormContainer>
  );
};

export default NewPassword;
