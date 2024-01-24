import { ChangeEvent, LegacyRef, KeyboardEvent } from "react";
import styles from "./input.module.scss";
import React from "react";
import classNames from "classnames";
import { useThemeContext } from "../context/theme/context";
import { Theme } from "../../@types";

interface InputProps {
  title?: string;
  placeholder: string;
  value?: string;
  onСhange: (value: string) => void;
  disabled?: boolean;
  errorText?: string;
  textarea?: boolean;
  className?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  // ref: LegacyRef<HTMLInputElement | null>;
}

const Input = React.forwardRef((props: InputProps, ref) => {
  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.onСhange(event.target.value);
  };
  const { themeValue } = useThemeContext();

  const inputProps = {
    onChange: onInputChange,
    value: props.value,
    placeholder: props.placeholder,
    className: classNames(styles.input, {
      [styles.disabled]: props.disabled,
      [styles.errorInput]: props.errorText,
    }),
    onKeyDown: props.onKeyDown,
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.lightContainer]: themeValue === Theme.Light,
      })}
    >
      <div className={styles.title}>{props.title}</div>
      <input ref={ref as LegacyRef<HTMLInputElement> | null} {...inputProps} />
      {props.errorText && (
        <div className={styles.errorText}>{props.errorText}</div>
      )}
    </div>
  );
});
export default Input;
