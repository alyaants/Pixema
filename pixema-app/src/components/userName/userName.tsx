import style from "./userName.module.scss";
import classNames from "classnames";

type UserNameProps = {
  username: string;
};

const UserName = (props: UserNameProps) => {
  return (
    <div>
      <div className={classNames(style.userNameWrap)}>
        <div className={classNames(style.initials)}>
          {props.username[0]}
          {props.username.split(" ")[1][0]}
        </div>
        <div className={classNames(style.fullName)}>{props.username}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.7808 9.37534C18.1258 9.8066 18.0559 10.4359 17.6247 10.7809L12 15.2807L6.37527 10.7809C5.94401 10.4359 5.87408 9.8066 6.21909 9.37534C6.5641 8.94408 7.1934 8.87416 7.62466 9.21917L12 12.7194L16.3753 9.21917C16.8065 8.87416 17.4358 8.94408 17.7808 9.37534Z"
              fill="#AFB2B6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserName;
