import { KeyboardEvent, useState } from "react";
import classNames from "classnames";
import styles from "./search.module.scss";
import { useNavigate } from "react-router-dom";
import Input from "../input/input";
import { SearchIcon } from "../assets/icons/searchIcon";
import { FilterIcon } from "../assets/icons/filter/filter";

interface SearchProps {
  disabled?: boolean;
}

const Search = (props: SearchProps) => {
  const navigate = useNavigate();

  const [isSearch, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSearchOpened = () => {
    setSearch(!isSearch);
    if (isSearch && inputValue) {
      navigate(`movie/${inputValue}`);
      setInputValue("");
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchOpened();
    }
  };

  return (
    <div>
      {isSearch ? (
        <div className={styles.searchWrapper}>
          <Input
            value={inputValue}
            onСhange={setInputValue}
            placeholder="Search"
            className={styles.search}
            onKeyDown={onKeyDown}
          />
          <div
            className={classNames(
              styles.magnifier
              //   {
              //   [styles.filterLight]: isLight,
              // }
            )}
            onClick={handleSearchOpened}
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
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
