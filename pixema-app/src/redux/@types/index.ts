import { movieList } from "../../@types";

export type PayloadDataAndCallback<Data> ={
  data: Data;
  callback: () => void;
}

export type SignUpUserData = {
  username: string;
  email: string;
  password: string;
};

export type SignUpResponseData = {
  username: string;
  email: string;
  id: number;
};

export type SignUpUserPayload = PayloadDataAndCallback<SignUpUserData>

export type PostData = {
  count: number;
  next: string;
  previous: null;
  // results: PostsList;
}

export type ActivateUserData ={
  uid: string,
  token: string
}

export type ActivateUserPayload = PayloadDataAndCallback<ActivateUserData>

export type MovieData = {
  docs: movieList;
}

