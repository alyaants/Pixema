import styles from "./filmList.module.scss";
import { MovieCard, MovieCardById, PostsList, SimilarMovies } from "../../../src/@types/index";
import FilmCard from "../filmCard/filmCard";
import { useDispatch } from "react-redux";
import Loader from "../loader/loader";

interface FilmListProps {
  filmList: MovieCard[] | MovieCardById[] 
  isTrend?: boolean;
  isListLoading?: boolean;
  isLoading?: boolean
}

const FilmList = (props: FilmListProps) => {

  // props.filmList.length ?
  // FilmList.length && !props.isLoading ? 
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
  ) : null
  // : (
  //   <Loader />
  // );
};

export default FilmList;
