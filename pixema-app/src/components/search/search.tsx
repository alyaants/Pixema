import classNames from "classnames";
import style from "./search.module.scss";

type SearchProps = {
  placeholder: string;
  isDisabled: boolean;
  className?: string;
  onSearchClick?: () => void;
};

const Search = (props: SearchProps) => {
  return (
    <div>
      <input
        type="search"
        placeholder={props.placeholder}
        disabled={props.isDisabled}
        className={classNames(props.className, style.searchContainer, props.isDisabled ? style.disabled : style.searchContainer)}
      />
      {/* <svg className={style.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM9 12C9 11.4477 9.44772 11 10 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H10C9.44772 13 9 12.5523 9 12ZM13 18C13 17.4477 13.4477 17 14 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H14C13.4477 19 13 18.5523 13 18Z"
          fill="#AFB2B6"
        />
      </svg> */}
    </div>
  );
};

export default Search;
