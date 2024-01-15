import { ReactElement } from "react";
import style from "./formPageContainer.module.scss";
import classNames from "classnames";
import Button, { ButtonTypes } from "../button/button";
import { Children } from "../../@types";
import Title from "../title/title";

type FormContainerProps = {
  title: string;
  children?: Children;
  btnTitle: string;
  onSubmit: () => void;
  additionalText?: ReactElement;
};

const FormContainer = (props: FormContainerProps) => {
  return (
    <div className={style.container}>
      <Title title={props.title} />
      <div className={style.formContainer}>
        <div className={style.fieldsContainer}>{props.children}</div>
        <Button
          type={ButtonTypes.Primary}
          title={props.btnTitle}
          onClick={props.onSubmit}
          className={style.button}
        />
        <div className={style.additionalText}>{props.additionalText}</div>
      </div>
    </div>
  );
};
export default FormContainer;
