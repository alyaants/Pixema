import classNames from "classnames";
import styles from "./filmCard.module.scss";
import { useThemeContext } from "../context/theme/context";
import { MovieCard, MovieCardById, Theme } from "../../@types";
import { FavoritesIcon } from "../assets/icons/favorite/favorite";
import { useNavigate } from "react-router-dom";

const FilmCard = (props: MovieCard | MovieCardById) => {
  const navigate = useNavigate();

  const onTitleClick = () => {
    navigate(`/movie/${props.id}`);
  };

  const { themeValue } = useThemeContext();
  //   const favoriteMovies = useSelector(MovieSelectors.getFavoriteMovies);
  //   const favouriteIndex = favoriteMovies.findIndex((item) => item.id === id);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={props.poster?.url} alt="#" />
      </div>
      <div className={styles.rating}>{props.rating?.kp}</div>

      <div
        onClick={onTitleClick}
        className={classNames(styles.title, {
          [styles.lightTitle]: themeValue === Theme.Light,
        })}
      >
        {props.name}
      </div>
      <div className={styles.genres}>
        <div className={styles.genres}>
          {props.genres?.map((item) => ` ${item.name} •`)}
        </div>
      </div>
      <div className={styles.isNotFavorite}>
        <FavoritesIcon fill={"#7B61FF"} />
      </div>
    </div>
  );
};

export default FilmCard;
