import { KeyboardEvent, useState } from "react";
import classNames from "classnames";
import styles from "./search.module.scss";
import { useNavigate } from "react-router-dom";
import Input from "../input/input";
import { SearchIcon } from "../assets/icons/searchIcon";
import { FilterIcon } from "../assets/icons/filter/filter";

interface SearchProps {
  disabled?: boolean;
};

const Search= (props:SearchProps) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");


  const onSearchClick = () => {
    searchValue.length > 0 && navigate(`/search/${searchValue}`);
  };

  const onEnterDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearchClick();
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <Input
        value={searchValue}
        onСhange={setSearchValue}
        placeholder="Search"
        className={styles.search}
      />
      <div
        className={classNames(styles.magnifier, 
        //   {
        //   [styles.filterLight]: isLight,
        // }
        )}
        onClick={onSearchClick}
      >
        <SearchIcon />
      </div>
      <div
        className={classNames(styles.filter, {
          // [styles.disabledFilter]: props.disabled,
          // [styles.filterLight]: props.isLight,
        })}
        // onClick={props.disabled ? () => {} : props.onFilterClick}
      >
        <FilterIcon />
      </div>
    </div>
  );
};

export default Search;