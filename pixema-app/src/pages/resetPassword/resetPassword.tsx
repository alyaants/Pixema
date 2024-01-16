import FormContainer from "../../components/formPageContainer/formPageContainer";
import Input from "../../components/input/input";
import style from "./resetPassword.module.scss";

type ResetPasswordProps = {
  infoText?: string;
};

const ResetPassword = (props: ResetPasswordProps) => {
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
            onСhange={() => {}}
          />
        </FormContainer>
      </div>
    </div>
  );
};

export default ResetPassword;
