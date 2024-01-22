import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../@types";
import { RootState } from "../store";

type InitialState = {
  themeValue: Theme;
};

const initialState: InitialState = {
  themeValue: Theme.Dark,
};

const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    setThemeValue: (state, action: PayloadAction<Theme>) => {
      state.themeValue = action.payload;
    },
  },
});
export const { setThemeValue } = themeSlice.actions;

export const themeSelectors = {
  getThemeValue: (state: RootState) => state.themeReducer.themeValue,
};

export default themeSlice.reducer;
