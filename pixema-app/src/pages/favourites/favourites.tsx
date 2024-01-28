import { useSelector } from "react-redux";
import style from "./favourites.module.scss";
import { MovieSelectors } from "../../redux/reducers/movieSlice";
import FilmList from "../../components/filmList/filmList";

const Favourites = () => {
  const favouritesMovies = useSelector(MovieSelectors.setSavedMovie);

  return (
    <div>
      <FilmList filmList={favouritesMovies} />
    </div>
  );
};

export default Favourites;
