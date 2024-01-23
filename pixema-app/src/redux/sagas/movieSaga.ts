import { getAllMovies, getSingleMovie, setAllMovies, setSingleMovie } from "../reducers/movieSlice";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import API from '../../utiles/api';
import { MovieData } from "../@types";
import { PayloadAction } from "@reduxjs/toolkit";
import { MovieCard, MovieCardById } from "../../@types";

function* movieWorker(){
    const response: ApiResponse<MovieData> = yield call(API.getMovies);
    if (response.ok && response.data) {
        yield put(setAllMovies(response.data.docs));
      } else {
        console.error("Movies error", response.problem);
      }
}  

function* singlMovieWorker(action: PayloadAction<string>){
  const response: ApiResponse<MovieCardById> = yield call(API.getSingleMovie, action.payload );
  if (response.ok && response.data) {
    yield put(setSingleMovie(response.data));
  } else {
    console.error("Movies error", response.problem);
  }
}

export default function* movieSagaWatcher(){
    yield all([takeLatest(getAllMovies, movieWorker), takeLatest(getSingleMovie, singlMovieWorker)])
}