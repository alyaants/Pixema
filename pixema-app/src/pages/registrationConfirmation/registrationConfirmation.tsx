import classNames from "classnames";
import FormContainer from "../../components/formPageContainer/formPageContainer";
import { Theme } from "../../@types/index";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activateUser } from "../../redux/reducers/authSlice";
import { RoutesList } from "../router";
import { useThemeContext } from "../../components/context/theme/context";
import style from "../signIn/signIn.module.scss";


const RegistrationConfirmation = () => {
  const { themeValue } = useThemeContext();
  const { uid, token } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (uid && token) {
      dispatch(
        activateUser({
          data: { uid, token },
          callback: () => navigate(RoutesList.SignIn),
        })
      );
    }
  };
  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <FormContainer
          title={"Registration Confirmation"}
          btnTitle={"Activate"}
          onSubmit={onSubmit}
        >
          <div className={style.additionalText}>{" Please activate your account with clicking on button."}</div>
        </FormContainer>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;
