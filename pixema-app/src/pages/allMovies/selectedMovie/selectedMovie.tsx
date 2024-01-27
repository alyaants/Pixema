import style from "./selectedMovie.module.scss";
import { FavoritesIcon } from "../../../components/assets/icons/favorite/favorite";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  MovieSelectors,
  getSingleMovie,
} from "../../../redux/reducers/movieSlice";
import { useEffect } from "react";
import Button, { ButtonTypes } from "../../../components/button/button";
import { ShareIcon } from "../../../components/assets/icons/share/share";
import FilmList from "../../../components/filmList/filmList";
import ReactPlayer from "react-player";
import { useThemeContext } from "../../../components/context/theme/context";
import classNames from "classnames";
import { Theme } from "../../../@types";
import { ImdbIcon } from "../../../components/assets/icons/imdb";
import SimilarMoviesSlider from "../../../components/slider/slider";

const SelectedMovie = () => {
  const { id } = useParams();

  const { themeValue } = useThemeContext();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const singleMovie = useSelector(MovieSelectors.getSingleMovie);
  const urlVideo = singleMovie?.videos?.trailers.map((url) => `${url.url}`);

  // const similarMovies = singleMovie?.similarMovies

  useEffect(() => {
    if (id) {
      dispatch(getSingleMovie(id));
    }
  }, [id]);

  return singleMovie ? (
    <div
      className={classNames(style.selectedMovieConainer, {
        [style.lightSelectedMovieConainer]: themeValue === Theme.Light,
      })}
    >
      <div className={style.selectedMovieImgContainer}>
        <div className={style.selectedMovieImg}>
          <img src={singleMovie.poster?.url} alt="#" />
        </div>
        <div className={style.tabsList}>
          <Button
            type={ButtonTypes.Secondary}
            title={<FavoritesIcon />}
            onClick={() => {}}
            className={style.buttons}
          />
          <Button
            type={ButtonTypes.Secondary}
            title={<ShareIcon />}
            onClick={() => {}}
            className={style.buttons}
          />
        </div>
      </div>
      <div className={style.selectedMovieInfo}>
        <div className={style.mainInfoMovie}>
          <ul className={style.movieGenre}>
            {singleMovie.genres?.map((item) => ` ${item.name} •`)}
          </ul>

          <h1 className={style.movieTitle}>{singleMovie.name}</h1>
          <div className={style.movieRaiting}>
            <p className={style.rating}>{singleMovie.rating?.kp}</p>
            <p className={style.imdb}>
              <ImdbIcon />
              {singleMovie.rating?.imdb}
            </p>
            <p className={style.movieLength}>{singleMovie.movieLength} min</p>
          </div>
          <div className={style.movieDescription}>
            <p className={style.descr}>{singleMovie.description}</p>
          </div>
        </div>

        <div className={style.aboutMovieContainer}>
          <div className={style.aboutMovieItem}>
            <p>Year</p>
            <p>{singleMovie.year}</p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>Released</p>
            <p>{singleMovie.premiere?.world?.slice(0, 10)}</p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>BoxOffice</p>
            <p>{singleMovie.budget?.value} $</p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>Country</p>
            <p>{singleMovie.countries?.map((item) => `${item.name} ,`)}</p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>Production</p>
            <p>
              {singleMovie.productionCompanies?.map(
                (item) => ` ${item.name} |`
              )}
            </p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>Actors</p>
            <p>
              {singleMovie.persons?.map((value, id) => {
                if (value.enProfession == "actor") {
                  return ` ${value.name},`;
                }
              })}
            </p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>Director</p>
            <p>
              {singleMovie.persons?.map((value, id) => {
                if (value.enProfession == "director") {
                  return ` ${value.name},`;
                }
              })}
            </p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>Writers</p>
            <p>
              {singleMovie.persons?.map((value, id) => {
                if (value.profession == "редакторы") {
                  return ` ${value.name},`;
                }
              })}
            </p>
          </div>
        </div>
        <div className={style.playerMovie}>
          <ReactPlayer
            url={singleMovie.videos?.trailers.map((video) => video.url)}
          />
        </div>
        <div className={style.movieReccomendations}>
          <SimilarMoviesSlider similarMovies={singleMovie?.similarMovies} />
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default SelectedMovie;
