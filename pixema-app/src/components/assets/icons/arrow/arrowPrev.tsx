import classNames from "classnames";
import style from "./arrow.module.scss";

interface ArrowProps {
  disabled?: boolean;
  className?: string;
}
export const ArrowPrevIcon = (props: ArrowProps) => {
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
        d="M10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071L3.79289 12.7071C3.40237 12.3166 3.40237 11.6834 3.79289 11.2929L8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289C10.5976 6.68342 10.5976 7.31658 10.2071 7.70711L6.91421 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H6.91421L10.2071 16.2929C10.5976 16.6834 10.5976 17.3166 10.2071 17.7071Z"
        fill="white"
      />
    </svg>
  );
};
