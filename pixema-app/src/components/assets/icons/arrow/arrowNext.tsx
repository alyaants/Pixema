import classNames from "classnames";
import style from "./arrow.module.scss";

interface ArrowProps {
  disabled?: boolean;
  className?: string;
}
export const ArrowNextIcon = (props: ArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={classNames(style.arrow, {
        [style.disabled]: props.disabled,
      })}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7929 17.7071C14.1834 18.0976 14.8166 18.0976 15.2071 17.7071L20.2071 12.7071C20.5976 12.3166 20.5976 11.6834 20.2071 11.2929L15.2071 6.29289C14.8166 5.90237 14.1834 5.90237 13.7929 6.29289C13.4024 6.68342 13.4024 7.31658 13.7929 7.70711L17.0858 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H17.0858L13.7929 16.2929C13.4024 16.6834 13.4024 17.3166 13.7929 17.7071Z"
        fill="white"
      />
    </svg>
  );
};