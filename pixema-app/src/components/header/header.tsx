import { KeyboardEvent } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Links from "../links/links";
import UserName from "../userName/userName";
import style from "./header.module.scss";
import { Logo } from "../assets/icons/logo/logo";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import { useThemeContext } from "../context/theme/context";
import { RoutesList } from "../../pages/router";
import Button, { ButtonTypes } from "../button/button";
import { UserIcon } from "../assets/icons/user/user";
import classNames from "classnames";
import { Order, Theme } from "../../@types";
import { useState } from "react";
import { SearchIcon } from "../assets/icons/searchIcon";
import { FilterIcon } from "../assets/icons/filter/filter";
import Input from "../input/input";
import {
  MovieSelectors,
  getAllCountries,
  getAllMovies,
  getSearchedMovies,
} from "../../redux/reducers/movieSlice";
import { CloseIcon } from "../assets/icons/close/close";

const Header = () => {
  const { themeValue } = useThemeContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const userInfo = useSelector(AuthSelectors.getUserInfo);
  const countriesName = useSelector(MovieSelectors.getAllCountries)

  const onLoginButtonClick = () => {
    navigate(RoutesList.SignIn);
  };

  const [isSearch, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isFilterOpened, setFilterOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSearchOpened = () => {
    setSearch(!isSearch);
    if (isSearch && inputValue) {
      dispatch(getSearchedMovies(inputValue));
      navigate(`/movies/${inputValue}`);
      setInputValue("");
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchOpened();
    }
  };

  const handleFilterOpened = () => {
    setFilterOpened(!isFilterOpened);
    console.log(isFilterOpened);
  };

  const onModalClose = () => {
    setFilterOpened(false);
    console.log(111222);
  };

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const onCountriesFilter = () =>{
    dispatch(getAllMovies({"countries.name" : selectedOption}))
  }

  const [yearValue, setYearValue] = useState("");
  const [rait, setRait] = useState("")

  const onYearFilter = () => {
    // setYearValue(yearValue)
    dispatch(getAllMovies({ year: yearValue }));
  };

  const onRaitingClick = () =>{
  dispatch(getAllMovies({'rating.kp':rait}))
  }

  const [selectedType, setSelectedType] = useState("");

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    dispatch(getAllMovies({ type: type }));
  };

  return (
    <div
      className={classNames(style.headerContainerMain, {
        [style.lightContainer]: themeValue === Theme.Light,
      })}
    >
      <div className={style.headerContainer}>
        {themeValue === Theme.Dark ? <Logo /> : <Logo fill={"#000"} />}
        <div className={style.search}>
          <div className={style.searchWrapper}>
            <Input
              value={inputValue}
              onСhange={setInputValue}
              placeholder="Search..."
              className={style.search}
              onKeyDown={onKeyDown}
            />
            <div className={style.magnifier} onClick={handleSearchOpened}>
              <SearchIcon />
            </div>
            <div className={style.filter} onClick={handleFilterOpened}>
              <FilterIcon />
            </div>
          </div>
        </div>
        {isLoggedIn && userInfo ? (
          <UserName username={userInfo.username} />
        ) : (
          <Button
            type={ButtonTypes.Primary}
            title={<UserIcon />}
            onClick={onLoginButtonClick}
            className={style.userBtn}
          />
        )}
      </div>
      <div className={style.content}>
        <div
          className={classNames(style.links, {
            [style.lightLinks]: themeValue === Theme.Light,
          })}
        >
          <Links />
        </div>
        <div className={style.mainContent}>
          <Outlet />
        </div>
      </div>
      {isFilterOpened && (
        <div>
          <div className={style.modal}>
            <div>
              <div className={style.modalHead}>
                <h3>Filter</h3>
                <Button
                  type={ButtonTypes.Secondary}
                  title={<CloseIcon />}
                  onClick={onModalClose}
                  className={style.closeBtn}
                />
              </div>
              <div className={style.filterContainer}>
                <div>
                  {/* <span>Sort By</span> */}
                  <div className={style.buttonsFolterContainer}>
                    <Input
                      title={"Year"}
                      placeholder={"Year"}
                      value={yearValue}
                      onСhange={setYearValue}
                      // ref={inputRef}
                    />
                    <Button
                      type={ButtonTypes.Primary}
                      title={"Find"}
                      onClick={onYearFilter}
                      className={style.findButton}
                    />
                  </div>
                  <div className={style.buttonsFolterContainer}>
                    <Input
                      title={"Raiting"}
                      placeholder={"Raiting"}
                      value={rait}
                      onСhange={setRait}
                      // ref={inputRef}
                    />
                    <Button
                      type={ButtonTypes.Primary}
                      title={"Find"}
                      onClick={onRaitingClick}
                      className={style.findButton}
                    />
                  </div>
                  {/* <ul className={style.typeContainer}>
                    <li
                      className={style.typeValue}
                      onClick={() => handleTypeClick("movie")}
                    >
                      movie
                    </li>
                    <li
                      className={style.typeValue}
                      onClick={() => handleTypeClick("cartoon")}
                    >
                      cartoon
                    </li>
                  </ul> */}
                  <div>
                    <Input title={"Full or short movie name"} placeholder={"Your text"} onСhange={()=>{}} />
                  </div>
                  <div>
                    <select className={style.select} onChange={handleOptionChange} value={selectedOption}>
                    <option value="">Choose a country</option>
                    {countriesName.map(name => 
                      <option value={name.name} key={name.name}>{name.name}</option>
                    )}
                    </select>
                    <Button type={ButtonTypes.Primary} title={"Поиск"} onClick={onCountriesFilter}  />
                  </div>
                </div>
              </div>
              <div className={style.filter}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
