import { create } from "apisauce";

  // https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10
const API = create({
  baseURL: "https://api.kinopoisk.dev/",
  headers:{
    "X-API-KEY":'E2QYT1X-DJN4CDF-JRXF6KG-2VVE2V1'
  }
});


const getMovies = () => {
    return API.get("v1.4/movie?page=1&limit=10");
  };
  
const getSingleMovie = (id:string) =>{
  return API.get(`v1.4/movie/${id}`);
}
export default {getMovies, getSingleMovie}