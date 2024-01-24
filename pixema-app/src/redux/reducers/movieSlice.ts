import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MovieCard, MovieCardById, movieList } from "../../@types";
import SelectedMovie from "../../pages/allMovies/selectedMovie/selectedMovie";

type InitialState = {
  movieList: movieList;
  singlMovie: MovieCardById | null;
  myMovie: movieList;
  searchedMovies: movieList,
};

const initialState: InitialState = {
  movieList: [],
  singlMovie: null,
  myMovie: [],
  searchedMovies: [],
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
} = MovieSlice.actions;

export const MovieSelectors = {
  getAllMovies: (state: RootState) => state.movieReducer.movieList,
  getSingleMovie: (state: RootState) => state.movieReducer.singlMovie,
  getMyMovie: (state: RootState) => state.movieReducer.myMovie,
  getSearchedMovies: (state: RootState) => state.movieReducer.searchedMovies,
};

export default MovieSlice.reducer;
