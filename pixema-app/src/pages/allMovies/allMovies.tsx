import React, { useEffect, useState } from "react";
import FilmList from "../../components/filmList/filmList";
import { useDispatch, useSelector } from "react-redux";
import { MovieSelectors, getAllMovies } from "../../redux/reducers/movieSlice";
import Button, { ButtonTypes } from "../../components/button/button";
import { LIMIT } from "../../utiles/constants";
import styles from "./allMovies.module.scss";
import Loader from "../../components/loader/loader";

interface AllMoviesProps {
  isLoading?: boolean;
}

const AllMovies = (props: AllMoviesProps) => {
  const movieList = useSelector(MovieSelectors.getAllMovies);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10); // используем useState для отслеживания значения limit

  useEffect(() => {
    dispatch(getAllMovies({ limit })); // используем текущее значение limit при загрузке компонента
  }, [limit]);

  const onMoreClick = () => {
    // увеличиваем значение limit на LIMIT (если вы хотите использовать константу LIMIT)
    // и передаем его в action
    setLimit((prevLimit) => prevLimit + LIMIT);
  };

  let years = "2000-2004";
  console.log(movieList);

  return  (
    <div>
      <FilmList filmList={movieList} isLoading={false} />
      <Button
        type={ButtonTypes.Primary}
        title={"Show More"}
        onClick={onMoreClick}
        className={styles.btn}
      />
    </div>
  ) 
};

export default AllMovies;
