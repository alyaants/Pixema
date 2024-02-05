import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MovieCardById, movieList } from "../../@types";
import { CountriesList, MoviesPayload } from "../@types";

type InitialState = {
  movieList: movieList;
  singlMovie: MovieCardById | null;
  myMovie: movieList;
  searchedMovies: movieList;
  savedMovie: MovieCardById[];
  countriesList: CountriesList[];
  favouritesMovie: movieList;
  isMoviesListLoading: boolean;
  trendMovies: movieList;
};

const initialState: InitialState = {
  movieList: [],
  singlMovie: null,
  myMovie: [],
  searchedMovies: [],
  savedMovie: [],
  countriesList: [],
  favouritesMovie: [],
  isMoviesListLoading: false,
  trendMovies: [],
};

const MovieSlice = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    getAllMovies: (_, __: PayloadAction<MoviesPayload>) => {},
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
    setSavedMovie: (state, action: PayloadAction<{ movie: MovieCardById }>) => {
      const { movie } = action.payload;
      const savedIndex = state.savedMovie.findIndex(
        (item) => item.id === movie.id
      ); //проверяем есть ли сохраненный фильм в массиве
      if (savedIndex === -1) {
        //если фильма нет, то пушим в массив карточку
        state.savedMovie.push(movie);
      } else {
        state.savedMovie.splice(savedIndex, 1); //либо добавили в избранное, либо убрали
      }
    },
    getAllCountries: (_, __: PayloadAction<undefined>) => {},
    setAllCountries: (state, action: PayloadAction<CountriesList[]>) => {
      state.countriesList = action.payload;
    },

    setMoviesLoading: (state, action: PayloadAction<boolean>) => {
      state.isMoviesListLoading = action.payload;
    },

    getTrendsMovies: (_, __: PayloadAction<undefined>) => {},
    setTrendsMovies: (state, action: PayloadAction<movieList>) => {
      state.trendMovies = action.payload;
    },
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
  setSavedMovie,
  getAllCountries,
  setAllCountries,
  setMoviesLoading,
  getTrendsMovies,
  setTrendsMovies,
} = MovieSlice.actions;

export const MovieSelectors = {
  getAllMovies: (state: RootState) => state.movieReducer.movieList,
  getSingleMovie: (state: RootState) => state.movieReducer.singlMovie,
  getMyMovie: (state: RootState) => state.movieReducer.myMovie,
  getSearchedMovies: (state: RootState) => state.movieReducer.searchedMovies,
  setSavedMovie: (state: RootState) => state.movieReducer.savedMovie,
  getAllCountries: (state: RootState) => state.movieReducer.countriesList,
  getFavouriteMovie: (state: RootState) => state.movieReducer.favouritesMovie,
  getMoviesLoading: (state: RootState) =>
    state.movieReducer.isMoviesListLoading,
  getTrendsMovies: (state: RootState) => state.movieReducer.trendMovies,
};

export default MovieSlice.reducer;
