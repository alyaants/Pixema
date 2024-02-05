import { useDispatch, useSelector } from "react-redux";
import {
  MovieSelectors,
  getAllMovies,
  getTrendsMovies,
} from "../../redux/reducers/movieSlice";
import FilmList from "../../components/filmList/filmList";
import { useEffect, useState } from "react";
import { LIMIT } from "../../utiles/constants";
import Button, { ButtonTypes } from "../../components/button/button";
import styles from "../allMovies/allMovies.module.scss";


const Trends = () => {
  const movieTrendsList = useSelector(MovieSelectors.getTrendsMovies);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10); 

  useEffect(() => {
    dispatch(getAllMovies({ limit }));
  }, [limit]);

  const onMoreClick = () => {
    setLimit((prevLimit) => prevLimit + LIMIT);
  };
  useEffect(() => {
    dispatch(getTrendsMovies()); 
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <FilmList filmList={movieTrendsList} />
        <Button
        type={ButtonTypes.Primary}
        title={"Show More"}
        onClick={onMoreClick}
        className={styles.btn}
      />
      </div>
    </div>
  );
};

export default Trends;
