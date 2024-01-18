import styles from "./filmList.module.scss";
import { PostsList } from "../../../src/@types/index";
import FilmCard from "../filmCard/filmCard";

interface FilmListProps {
  filmList: PostsList;
  isTrend?: boolean;
  isListLoading?: boolean;
}

const FilmList = (props: FilmListProps) => {
  return props.filmList.length && !props.isListLoading ? (
    <div className={styles.filmListContainer}>
      {props.filmList.map((el) => {
        return (
          <FilmCard
          key={el.id}
          {...el}
          />
        );
      })}
    </div>
  ) : null;
};

export default FilmList;
