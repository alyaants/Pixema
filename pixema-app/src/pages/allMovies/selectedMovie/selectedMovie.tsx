import { title } from "process";
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
// import React from 'react'
import ReactPlayer from 'react-player'


const SelectedMovie = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const singleMovie = useSelector(MovieSelectors.getSingleMovie);
  const urlVideo = singleMovie?.videos?.trailers.map((url) => `${url.url}`)

  // const similarMovies = singleMovie?.similarMovies

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
        <div className={style.tabsList}>
        <Button  type={ButtonTypes.Secondary} title={<FavoritesIcon />} onClick={() => {}} className={style.buttons}/>
        <Button  type={ButtonTypes.Secondary} title={<ShareIcon/>} onClick={() => {}} className={style.buttons}/>
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
            <p>{singleMovie.description}</p>
          </div>
        </div>

        <div className={style.aboutMovieContainer}>
          <div className={style.aboutMovieItem}>
            <p>year</p>
            <p>{singleMovie.year}</p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>released</p>
            <p>{singleMovie.premiere?.world?.slice(0,10)}</p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>boxoffice</p>
            <p>{singleMovie.budget?.value} $</p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>country</p>
            <p>{singleMovie.countries?.map((item) => `${item.name} ,`)}</p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>production</p>
            <p>
              {singleMovie.productionCompanies?.map((item) => ` ${item.name} |`)}
            </p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>actors</p>
            <p>
              {singleMovie.persons?.map((value, id) => {
                if (value.enProfession == "actor") {
                  return ` ${value.name},`;
                }
              })}
            </p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>director</p>
            <p>{singleMovie.persons?.map((value, id) => {
                if (value.enProfession == "director") {
                  return ` ${value.name},`;
                }
              })}</p>
          </div>
          <div className={style.aboutMovieItem}>
            <p>writers</p>
          <p>
            {singleMovie.persons?.map((value, id) => {
              if (value.profession == "редакторы") {
                return ` ${value.name},`;
              }
            }
          )}
            </p>
          </div>
        </div>
        <div className={style.playerMovie}>
<ReactPlayer url= {singleMovie.videos?.trailers.map((video) => video.url)}/>
        </div>
        <div className={style.movieReccomendations}>
          <span>Trailer</span>
         <FilmList filmList={singleMovie?.similarMovies}   />
      </div>

      </div>
    </div>
      
  ) : (
    <div></div>
  );
};

export default SelectedMovie;
