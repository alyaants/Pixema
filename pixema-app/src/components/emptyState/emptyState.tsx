import classNames from "classnames";
import { EmptyListIcon } from "../assets/icons/emptyListIcon/emptyListIcon";
import styles from "./emptyState.module.scss";
import { useThemeContext } from "../context/theme/context";
import { Theme } from "../../@types";
interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyState = (props: EmptyStateProps) => {

  const { themeValue } = useThemeContext();

  return (
    <div  className={classNames(styles.container,{
      [styles.lightContainer]: themeValue === Theme.Light,
    })}>
      <div className={styles.icon}>
        <EmptyListIcon />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );
};
export default EmptyState;
