import { useState } from "react";
import styles from "./search.module.scss";
import { useNavigate } from "react-router-dom";
import Input from "../input/input";
import { SearchIcon } from "../assets/icons/searchIcon";
import { FilterIcon } from "../assets/icons/filter/filter";
import { useDispatch } from "react-redux";

interface SearchProps {
  disabled?: boolean;
}

const Search = (props: SearchProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSearch, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSearchOpened = () => {
    setSearch(!isSearch);
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
          />
          <div className={styles.magnifier} onClick={handleSearchOpened}>
            <SearchIcon />
          </div>
          <div className={styles.filter}>
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
