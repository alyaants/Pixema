import { all, takeLatest, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";

import {
  activateUser,
  getUserInfo,
  logoutUser,
  setAccessToken,
  setUserInfo,
  signInUser,
  signUpUser,
} from "../reducers/authSlice";
import {
  ActivateUserPayload,
  SignInUserPayload,
  SignInUserResponse,
  SignUpResponseData,
  SignUpUserPayload,
  UserInfoResponse,
} from "../@types";
import API2 from "../../utiles/api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../utiles/constants";
import callCheckingAuth from "./helpers/callCheckingAuth";

function* signUpUserWorker(action: PayloadAction<SignUpUserPayload>) {
  const { data, callback } = action.payload;
  const response: ApiResponse<SignUpResponseData> = yield call(
    API2.signUpUser,
    data
  );
  if (response.ok && response.data) {
    callback();
  } else {
    console.error("Sign Up User error", response.problem);
  }
}

function* activateUserWorker(action: PayloadAction<ActivateUserPayload>) {
  const { data, callback } = action.payload;
  const response: ApiResponse<undefined> = yield call(API2.activateUser, data);
  if (response.ok) {
    callback();
  } else {
    console.error("Activate User error", response.problem);
  }
}

function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
  const { data, callback } = action.payload;
  const response: ApiResponse<SignInUserResponse> = yield call(
    API2.createToken,
    data
  );
  if (response.ok && response.data) {
    yield put(setAccessToken(response.data.access));
    localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);

    callback();
  } else {
    console.error("Sign In User error", response.problem);
  }
}

function* userInfoWorker() {
  const response: ApiResponse<UserInfoResponse> | undefined =
    yield callCheckingAuth(API2.getUserInfo);
  if (response && response?.ok && response?.data) {
    yield put(setUserInfo(response.data));
  } else {
    console.error("Get User Info error", response?.problem);
  }
}

function* logoutWorker() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  yield put(setAccessToken(""));
}

export default function* authSaga() {
  yield all([
    takeLatest(signUpUser, signUpUserWorker), // забери пследнего и впихни в signUpUserWorker
    takeLatest(activateUser, activateUserWorker),
    takeLatest(signInUser, signInUserWorker),
    takeLatest(getUserInfo, userInfoWorker),
    takeLatest(logoutUser, logoutWorker),
  ]);
}
