import { create } from "apisauce";
import {
  ActivateUserData,
  SignInUserData,
  SignUpUserData,
} from "../../redux/@types";

// https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10

// XVE8C2B-F5FMDQE-K3XE9JH-R2G27RF

// E2QYT1X-DJN4CDF-JRXF6KG-2VVE2V1

// 0QERFNC-X9N4F35-GVCR05K-NPH6VH0
const API = create({
  baseURL: "https://api.kinopoisk.dev/",
  headers: {
    "X-API-KEY": "E2QYT1X-DJN4CDF-JRXF6KG-2VVE2V1",
  },
});

const getMovies = () => {
  return API.get("v1.4/movie?page=1&limit=10");
};

const getSingleMovie = (id: string) => {
  return API.get(`v1.4/movie/${id}`);
};

const API2 = create({
  baseURL: "https://studapi.teachmeskills.by",
});

const signUpUser = (data: SignUpUserData) => {
  return API2.post("/auth/users/", data);
};

const activateUser = (data: ActivateUserData) => {
  return API2.post("/auth/users/activation/", data);
};

const createToken = (data: SignInUserData) => {
  return API2.post("/auth/jwt/create/", data);
};

const verifyToken = (token: string) => {
  return API2.post("/auth/jwt/verify/", { token });
};

const refreshToken = (refresh: string) => {
  return API2.post("/auth/jwt/refresh/", { refresh });
};

const getUserInfo = (token: string) => {
  return API2.get(
    "/auth/users/me/",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const getSearch = ( query: string) => {
  return API.get(`/v1.4/movie/search`, { query, limit: 10 });
};

export default {
  getMovies,
  getSingleMovie,
  signUpUser,
  activateUser,
  createToken,
  verifyToken,
  refreshToken,
  getUserInfo,
  getSearch,
};
