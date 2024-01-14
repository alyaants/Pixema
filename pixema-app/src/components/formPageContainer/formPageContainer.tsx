import { ReactElement } from 'react';
import style from './formPageContainer.module.scss'
import classNames from 'classnames';
import Button, { ButtonTypes } from '../button/button';

type FormContainerProps = {
    title: string;
    children?: ReactElement;
    btnTitle: string;
    onSubmit: () => void;
    additionalText?: ReactElement;
}

const FormContainer = (props: FormContainerProps) =>{
    return(
  <div className={classNames(style.formContainer)}>
    <div className="title">{props.title}</div>
    <div >
        {props.children}
        <Button
          type={ButtonTypes.Primary}
          title={props.btnTitle}
          onClick={props.onSubmit}
        />
        <div
          className={classNames(style.additionalText)}
        >
          {props.additionalText}
        </div>
      </div>
  </div>
    )
}

export default FormContainer;