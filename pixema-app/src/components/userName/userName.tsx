import { FC, useState } from "react";

import styles from "./userName.module.scss";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../context/theme/context";
import { RoutesList } from "../../pages/router";
import { UserIcon } from "../assets/icons/user/user";
import { Theme } from "../../@types";
import { ArrowRightIcon } from "../assets/icons/arrow/arrowRight/arrowRight";
import { ArrowDownIcon } from "../assets/icons/arrow/arrowDown/arrowDown";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, logoutUser } from "../../redux/reducers/authSlice";

type UsernameProps = {
  username: string;
};

const Username: FC<UsernameProps> = ({ username }) => {
  const [isOpened, setOpened] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const dispatch = useDispatch();

  const { themeValue } = useThemeContext();

  const handleMenuOpened = () => {
    setOpened(!isOpened);
  };
  const onLoginButtonClick = () => {
    navigate(RoutesList.SignIn);
  };

  const onLogout = () => {
    dispatch(logoutUser());
  };
  const dropDownList = [
    {
      title: "Edit profile",
      onClick: () => {
        navigate(RoutesList.Settings);
      },
    },
    {
      title: "Log Out",
      onClick: () => {
        dispatch(logoutUser());
        navigate(RoutesList.SignIn);
      },
      // {
      //   const users: UserListType[] = JSON.parse(
      //     localStorage.getItem(USERS_DATA) || "",
      //   );
      //   const activeUser: UserListType = JSON.parse(
      //     localStorage.getItem(ACTIVE_USER_DATA) || "",
      //   );

      //   users.forEach((user) => {
      //     if (activeUser.username === user.username) {
      //       user.isLoggedIn = false;
      //       localStorage.setItem(USERS_DATA, JSON.stringify(users));
      //     }
      //   });

      //   if (users) localStorage.removeItem(ACTIVE_USER_DATA);
      //   navigate(RoutesList.SignIn);
      //   document.location.reload();
      // },
    },
  ];

  let usernameArray: string[];
  if (username) {
    usernameArray = username.replace(/\s+/g, " ").trim().split(" ");
  } else {
    usernameArray = [];
  }

  return (
    <div className={styles.container} onClick={handleMenuOpened}>
      <div className={styles.initials}>
        {usernameArray.length > 0 ? (
          usernameArray.length > 1 ? (
            `${usernameArray[0][0].toUpperCase()}${usernameArray[1][0].toUpperCase()}`
          ) : (
            `${usernameArray[0][0].toUpperCase()}`
          )
        ) : (
          <UserIcon />
        )}
      </div>
      <div
        className={classNames(styles.username, {
          [styles.lightUsername]: themeValue === Theme.Light,
        })}
      >
        {username ? `${username}` : "Sign In"}
      </div>
      <div
        className={classNames(styles.icon, {
          [styles.lightIcon]: themeValue === Theme.Light,
        })}
      >
        {!isOpened ? <ArrowRightIcon /> : <ArrowDownIcon />}
      </div>

      {isOpened && (
        <div
          className={classNames(styles.list, {
            [styles.lightList]: themeValue === Theme.Light,
          })}
        >
          {dropDownList.map(({ title, onClick }, index) => {
            return (
              <div
                className={classNames(styles.item, {
                  [styles.lightItem]: themeValue === Theme.Light,
                })}
                onClick={onClick}
                key={index}
              >
                {title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Username;
