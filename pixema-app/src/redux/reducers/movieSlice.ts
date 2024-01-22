import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MovieCard, movieList } from "../../@types";
import SelectedMovie from "../../pages/allMovies/selectedMovie/selectedMovie";

type InitialState = {
  movieList: movieList;
  singlMovie: MovieCard | null;
  myMovie: movieList;
};

const initialState: InitialState = {
  movieList: [],
  singlMovie: null,
  myMovie: [],
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
    setSingleMovie: (state, action: PayloadAction<MovieCard | null>) => {
      state.singlMovie = action.payload;
    },
    getMyMovie: (_, __: PayloadAction<undefined>) => {},
    setMyMovie: (state, action: PayloadAction<movieList>) => {
      state.myMovie = action.payload;
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
} = MovieSlice.actions;

export const MovieSelectors = {
  getAllMovies: (state: RootState) => state.movieReducer.movieList,
  getSingleMovie: (state: RootState) => state.movieReducer.singlMovie,
  getMyMovie: (state: RootState) => state.movieReducer.myMovie,
};

export default MovieSlice.reducer;
