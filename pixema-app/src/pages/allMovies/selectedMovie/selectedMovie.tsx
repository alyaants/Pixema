import { title } from "process";
import TabsList from "../../../components/tabsList/tabsList";
import style from "./selectedMovie.module.scss";
import { FavoritesIcon } from "../../../components/assets/icons/favorite/favorite";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { MovieSelectors, getSingleMovie } from "../../../redux/reducers/movieSlice";
import { useEffect } from "react";

const SelectedMovie = () => {


    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    const singleMovie = useSelector(MovieSelectors.getSingleMovie)

    useEffect(() => {
        if (id) {
          dispatch(getSingleMovie(id));
        }
      }, [id]);
    
  return singleMovie ? (
    <div className={style.selectedMovieConainer}>
      <div className={style.selectedMovieImgContainer}>
        <div className={style.selectedMovieImg}>
          <img src={singleMovie.poster?.url} alt="#" />
        </div>
        <div>
          <TabsList isActive={true} className={style.tabsList} />
        </div>
      </div>
      <div className={style.selectedMovieInfo}>
        <div className={style.mainInfoMovie}>
            <ul className={style.movieGenre}>
          {singleMovie.genres?.map((item) => ` ${item.name}`)}
          </ul>
    
          <h1 className={style.movieTitle}>{singleMovie.name}</h1>
          <div className={style.movieRaiting}>
            <p>{singleMovie.rating?.kp}</p>
            <p>{singleMovie.rating?.imdb}</p>
            <p>{singleMovie.movieLength}</p>
          </div>
          <div className={style.movieDescription}>
            <p>
             {singleMovie.description}
            </p>
          </div>
        </div>

        <div className={style.aboutMovieContainer}>
           <div className={style.aboutMovieItem}>
            <p>year</p>
            <p>{singleMovie.year}</p>
           </div>
           <div className={style.aboutMovieItem}>
            <p>released</p>
            <p>{singleMovie.year}</p>
           </div>
           <div className={style.aboutMovieItem}>
            <p>boxoffice</p>
            <p>Lorem ipsum dolor sit.</p>
           </div>
           <div className={style.aboutMovieItem}>
            <p>country</p>
            <p>{singleMovie.countries?.map((item) => `${item}`)}</p>
           </div>
           <div className={style.aboutMovieItem}>
            <p>production</p>
            <p>{singleMovie.backdrop?.previewUrl}</p>
           </div>
           <div className={style.aboutMovieItem}>
            <p>actors</p>
            <p>{singleMovie.names?.map((item) => `${item}`)}</p>
           </div>
           <div className={style.aboutMovieItem}>
            <p>director</p>
            <p>Lorem ipsum dolor sit.</p>
           </div>
           <div className={style.aboutMovieItem}>
            <p>writers</p>
            <p>Lorem ipsum dolor sit.</p>
           </div>
        </div>
      </div>
    </div>
  ) : <div></div>
};

export default SelectedMovie;
