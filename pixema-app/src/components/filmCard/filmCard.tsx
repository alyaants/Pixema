import classNames from "classnames";
import styles from "./filmCard.module.scss";
import { useThemeContext } from "../context/theme/context";
import { Theme } from "../../@types";
import { FavoritesIcon } from "../assets/icons/favorite/favorite";
import { TrendsIcon } from "../assets/icons/trends/trends";

interface FilmCardProps {
  image: string;
  onSavedClick?: () => void;
  onShareClick?: () => void;
  genres: string;
  ratingsSummary: number;
  id: number;
  title: string;
  //   className;
}

const FilmCard = (props: FilmCardProps) => {
  const { themeValue } = useThemeContext();
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={props.image} alt="#" />
      </div>
      <div
        className={classNames(styles.rating, 
        //     {
        //   [styles.yellow]: vote_average >= 5.5 && vote_average < 7.5,
        //   [styles.orange]: vote_average >= 0 && vote_average < 5.5,
        //   [styles.trend]: isTrend,
        // }
        )}
      >
         <TrendsIcon width={"16"} height={"16"} />
      </div>

      <div
        className={classNames(styles.title, {
          [styles.lightTitle]: themeValue === Theme.Light,
        })}
        // onClick={onPostClick}
      >
        {props.title}
      </div>
      <div className={styles.genres}>
        <div className={styles.genres}>
            {props.genres}
        </div>
      </div>
      <div
        className={classNames(styles.isNotFavorite, 
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
