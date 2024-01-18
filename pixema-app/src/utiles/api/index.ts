import { create } from "apisauce";

const API = create({
  baseURL: "https://api.kinopoisk.dev/documentation",
});


const getPosts = () => {
    return API.get("/blog/posts/?limit=12");
  };
  