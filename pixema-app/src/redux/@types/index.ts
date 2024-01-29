import { MovieCard, PostsList, movieList } from "../../@types";

export type PayloadDataAndCallback<Data> = {
  data: Data;
  callback: () => void;
};

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

export type SignUpUserPayload = PayloadDataAndCallback<SignUpUserData>;

export type PostData = {
  count: number;
  next: string;
  previous: null;
  results: PostsList;
};

export type ActivateUserData = {
  uid: string;
  token: string;
};

export type ActivateUserPayload = PayloadDataAndCallback<ActivateUserData>;

export type MovieData = {
  docs: movieList;
  results: movieList;
};

export type SignInUserData = {
  email: string;
  password: string;
};

export type SignInUserPayload = PayloadDataAndCallback<SignInUserData>;

export type SignInUserResponse = {
  access: string;
  refresh: string;
};

export type UserInfoResponse = {
  username: string;
  id: number;
  email: string;
};

export type RefreshResponseData = {
  access: string;
};

export type SearchPayload = {
  page: number;
  query: string;
};

export type SearchResponse = {
  page: number;
  results: MovieCard[];
};

export type SetSearchedMoviesPayload = {
  movieList: movieList;
  isOverwrite: boolean;
  total_pages: number;
};

export type MoviesPayload ={
  // movieList: movieList,
  year?: string | string[]
  type?: string | string[]
}