import { ReactElement } from "react";
import style from "./formPageContainer.module.scss";
import Button, { ButtonTypes } from "../button/button";
import { Children, Theme } from "../../@types";
import Title from "../title/title";
import { useThemeContext } from "../context/theme/context";
import classNames from "classnames";

type FormContainerProps = {
  title: string;
  children?: Children;
  btnTitle: string;
  onSubmit: () => void;
  additionalText?: ReactElement;
  className?: string;
};

const FormContainer = (props: FormContainerProps) => {
  const { themeValue } = useThemeContext();

  return (
    <div className={classNames(style.container, {[style.lightContainer]: themeValue === Theme.Light})}>
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
