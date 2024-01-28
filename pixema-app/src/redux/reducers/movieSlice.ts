import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MovieCard, MovieCardById, movieList } from "../../@types";
import SelectedMovie from "../../pages/allMovies/selectedMovie/selectedMovie";
import { RootCloseEvent } from "react-bootstrap/esm/types";

type InitialState = {
  movieList: movieList;
  singlMovie: MovieCardById | null;
  myMovie: movieList;
  searchedMovies: movieList,
  savedMovie: MovieCardById[]
};

const initialState: InitialState = {
  movieList: [],
  singlMovie: null,
  myMovie: [],
  searchedMovies: [],
  savedMovie: []
};

const MovieSlice = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    getAllMovies: (_, __: PayloadAction<undefined>) => {},
    setAllMovies: (state, action: PayloadAction<movieList>) => {
      state.movieList = action.payload;
    },
    getSingleMovie: (_, __: PayloadAction<string>) => {},
    setSingleMovie: (state, action: PayloadAction<MovieCardById | null>) => {
      state.singlMovie = action.payload;
    },
    getMyMovie: (_, __: PayloadAction<undefined>) => {},
    setMyMovie: (state, action: PayloadAction<movieList>) => {
      state.myMovie = action.payload;
    },

    getSearchedMovies: (_, __: PayloadAction<string>) => {},
    setSearchedMovies: (state, action: PayloadAction<movieList>) => {
      state.searchedMovies = action.payload;
    },
    setSavedMovie:(state, action: PayloadAction<{movie: MovieCardById}>) => {
      const {movie} = action.payload
      const savedIndex = state.savedMovie.findIndex(
        (item) => item.id === movie.id
      ); //проверяем есть ли сохраненный фильм в массиве
      if (savedIndex === -1) {
        //если фильма нет, то пушим в массив карточку
        state.savedMovie.push(movie);
      } else {
        state.savedMovie.splice(savedIndex, 1); //либо добавили в избранное, либо убрали
      }
    }
  },
});

export const {
  getAllMovies,
  setAllMovies,
  getSingleMovie,
  setSingleMovie,
  getMyMovie,
  setMyMovie,
  getSearchedMovies,
  setSearchedMovies, 
  setSavedMovie
} = MovieSlice.actions;

export const MovieSelectors = {
  getAllMovies: (state: RootState) => state.movieReducer.movieList,
  getSingleMovie: (state: RootState) => state.movieReducer.singlMovie,
  getMyMovie: (state: RootState) => state.movieReducer.myMovie,
  getSearchedMovies: (state: RootState) => state.movieReducer.searchedMovies,
  setSavedMovie:(state: RootState) => state.movieReducer.savedMovie
};

export default MovieSlice.reducer;
