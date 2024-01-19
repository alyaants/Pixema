import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { movieList } from '../../@types';

type InitialState = {
    movieList: movieList;
}

const initialState: InitialState = {
   movieList: []
  };

const MovieSlice = createSlice({
name: "movieReducer",
initialState,
reducers: {
    getAllMovies: (_,__: PayloadAction<undefined>) => {},
    setAllMovies:(state, action:PayloadAction<movieList>) => {
        state.movieList = action.payload
    }
},
})

export const { getAllMovies,  setAllMovies } = MovieSlice.actions;

export const MovieSelectors = {
getAllMovies: (state: RootState) => state.movieReducer.movieList
}

export default MovieSlice.reducer