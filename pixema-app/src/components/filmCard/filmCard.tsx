import classNames from "classnames";
import styles from "./filmCard.module.scss";
import { useThemeContext } from "../context/theme/context";
import { Theme } from "../../@types";
import { FavoritesIcon } from "../assets/icons/favorite/favorite";

interface FilmCardProps {
  poster?: string;
  genres?: string;
  ratingsSummary?: number;
  id?: number;
  title?: string;

  onSavedClick?: () => void;
  onShareClick?: () => void;
  //   className;
}

const FilmCard = (props: FilmCardProps) => {
  const { themeValue } = useThemeContext();
  //   const favoriteMovies = useSelector(MovieSelectors.getFavoriteMovies);
  //   const favouriteIndex = favoriteMovies.findIndex((item) => item.id === id);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={props.poster} alt="#" />
      </div>
      <div
        className={classNames(styles.rating, {
          // [styles.yellow]: props.ratingsSummary >= 5.5 && props.ratingsSummary < 7.5,
          // [styles.orange]: props.ratingsSummary >= 0 && props.ratingsSummary < 5.5,
          // [styles.trend]: isTrend,
        })}
      >
        {props.ratingsSummary}
      </div>

      <div
        className={classNames(styles.title, {
          [styles.lightTitle]: themeValue === Theme.Light,
        })}
        onClick={props.onSavedClick}
      >
        {props.title}
      </div>
      <div className={styles.genres}>
        <div className={styles.genres}>{props.genres}</div>
      </div>
      <div
        className={classNames(
          styles.isNotFavorite
          //     {
          //   [styles.favorite]: favouriteIndex !== -1,
          // }
        )}
      >
        <FavoritesIcon fill={"#7B61FF"} />
      </div>
    </div>
  );
};

export default FilmCard;
