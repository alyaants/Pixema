import styles from "./filmList.module.scss";
import { MovieCard, MovieCardById, PostsList, SimilarMovies } from "../../../src/@types/index";
import FilmCard from "../filmCard/filmCard";
import { useDispatch } from "react-redux";

interface FilmListProps {
  filmList: MovieCard[] | SimilarMovies[] 
  isTrend?: boolean;
  isListLoading?: boolean;
}

const FilmList = (props: FilmListProps) => {

  
  return props.filmList.length ? (
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
