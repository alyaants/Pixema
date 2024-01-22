import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ActivateUserPayload,
  SignInUserPayload,
  SignUpUserPayload,
  UserInfoResponse,
} from "../@types";
import { ACCESS_TOKEN_KEY } from "../../utiles/constants";
import { RootState } from "../store";

type InitialState = {
  accessToken: string;
  userInfo: UserInfoResponse | null;
};

const initialState: InitialState = {
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || "",
  userInfo: null,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    signUpUser: (_, __: PayloadAction<SignUpUserPayload>) => {},
    activateUser: (_, __: PayloadAction<ActivateUserPayload>) => {},
    signInUser: (_, __: PayloadAction<SignInUserPayload>) => {},
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    getUserInfo: (_, __: PayloadAction<undefined>) => {},
    setUserInfo: (state, action: PayloadAction<UserInfoResponse | null>) => {
      state.userInfo = action.payload;
    },
    logoutUser: (_, __: PayloadAction<undefined>) => {},
  },
});

export const {
  signUpUser,
  activateUser,
  signInUser,
  setAccessToken,
  getUserInfo,
  setUserInfo,
  logoutUser
} = authSlice.actions;

export const AuthSelectors = {
  getLoggedIn: (state: RootState) => !!state.authReducer.accessToken,
  getUserInfo: (state: RootState) => state.authReducer.userInfo,
  getlogoutUser: (state: RootState) => state.authReducer.userInfo,

};

export default authSlice.reducer;
