import { all } from "redux-saga/effects";
import movieSaga from "./movieSaga";
import authSaga from "./authSaga";

export default function* rootsaga() {
  yield all([authSaga(), movieSaga()]);
}
