import classNames from "classnames";
import style from "./search.module.scss";
import Input from "../input/input";
import Button, { ButtonTypes } from "../button/button";
import { useState } from "react";
import { FilterIcon } from "../assets/icons/filter/filter";

type SearchProps = {
  placeholder: string;
  isDisabled: boolean;
  className?: string;
  onSearchClick?: () => void;
};

const Search = (props: SearchProps) => {
  const [isSearch, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSearchOpened = () => {
    setSearch(!isSearch);
  };
  return (
    <div className={style.searchContainer}>
      <Input
        placeholder={"Search..."}
        onСhange={setInputValue}
        value={inputValue}
        className={style.searchInput}
      />
      <Button
        type={ButtonTypes.Secondary}
        title={<FilterIcon />}
        onClick={handleSearchOpened}
        className={style.filter}
      />
    </div>
  );
};

export default Search;
