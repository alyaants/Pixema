import { useDispatch, useSelector } from "react-redux";
import style from "../favourites/favourites.module.scss";
import { MovieSelectors, getTrendsMovies } from "../../redux/reducers/movieSlice";
import FilmList from "../../components/filmList/filmList";
import EmptyState from "../../components/emptyState/emptyState";
import { useEffect } from "react";

const Trends = () => {
    const movieTrendsList = useSelector(MovieSelectors.getTrendsMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrendsMovies()); // используем текущее значение limit при загрузке компонента
      }, []);

  return (
    <div>
      
        <div className={style.container}>
          <FilmList filmList={movieTrendsList}  />
        </div>
    </div>
  );
};

export default Trends;
