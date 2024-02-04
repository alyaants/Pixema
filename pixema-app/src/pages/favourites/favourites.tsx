import { useSelector } from "react-redux";
import style from "./favourites.module.scss";
import { MovieSelectors } from "../../redux/reducers/movieSlice";
import FilmList from "../../components/filmList/filmList";
import EmptyState from "../../components/emptyState/emptyState";

const Favourites = () => {
  const favouritesMovies = useSelector(MovieSelectors.setSavedMovie);
  const isListLoading = useSelector(MovieSelectors.getMoviesLoading);

  return (
    <div>
      {favouritesMovies.length ? (
        <div className={style.container}>
          {<FilmList filmList={favouritesMovies}  isLoading={isListLoading} />}
        </div>
      ) : (
        <EmptyState
          title={"No favorite movies..."}
          description={"Add to favorites and come back"}
        />
      )}
    </div>
  );
};

export default Favourites;
