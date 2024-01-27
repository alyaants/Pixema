import FilmList from "../../components/filmList/filmList";

import { useDispatch, useSelector} from "react-redux";
import { MovieSelectors, getAllMovies } from "../../redux/reducers/movieSlice";
import {  useEffect } from "react";


// const MOCK_ARRAY = [
//   {
//     id: 666,
//     genres: "comedy fantasy",
//     poster: "https://pedklassy.bspu.by/wp-content/uploads/2018/01/1066793.jpg",
//     title: "Science Fair",
//     ratingsSummary: 8.2,
//   },
//   {
//     id: 44,
//     genres: "comedy adventures",
//     poster:
//       "https://vokrug.tv/pic/product/d/0/6/3/d063eb2537891eed191abba6b1b79bd8.jpg",
//     title: "Дора",
//     ratingsSummary: 7.9,
//   },
//   {
//     id: 8,
//     genres: "adventures detective",
//     poster:
//       "https://cinema.mosfilm.ru/upload/resize_cache/iblock/cca/315_315_0/kse3vw479rdxhcsfvn2jv3reo3tww94h.jpg",
//     title: "Хитровка",
//     ratingsSummary: 9.1,
//   },
//   {
//     id: 14,
//     genres: "drama",
//     poster: "https://www.kino-teatr.ru/movie/posters/big/6/130656.jpg",
//     title: "Воздух",
//     ratingsSummary: 6.5,
//   },
//   {
//     id: 33,
//     genres: "horror detective",
//     poster:
//       "https://i.pinimg.com/736x/67/dc/e2/67dce27cf7076616d1e59020000bb355.jpg",
//     title: "Witch",
//     ratingsSummary: 7.3,
//   },
//   {
//     id: 12,
//     genres: "action sci-fi",
//     poster:
//       "https://img.ixbt.site/live/images/original/20/28/05/2023/01/20/5f88cf8bd0.png?w=877",
//     title: "Я - Легенда",
//     ratingsSummary: 5.8,
//   },
//   {
//     id: 1,
//     genres: "adventures thriller",
//     poster: "https://media.foma.ru/2021/11/2560x.jpg",
//     title: "Миа и белый лев",
//     ratingsSummary: 6.6,
//   },
//   {
//     id: 10,
//     genres: "thriller",
//     poster:
//       "https://thumbs.dfs.ivi.ru/storage26/contents/0/5/b09e681dca461ee6ee85f0c55ec172.jpg",
//     title: "Крушение",
//     ratingsSummary: 9.1,
//   },
//   {
//     id: 55,
//     genres: "romance musical",
//     poster:
//       "https://vokrug.tv/pic/product/f/0/6/0/f06015aa52f254bc696d6f06f0e90ffd.jpg",
//     title: "Рам и Лила",
//     ratingsSummary: 8.2,
//   },
//   {
//     id: 7,
//     genres: "sci-fi cction",
//     poster:
//       "https://tengrinews.kz/userdata/u416/2023-03/resize/b8004568beedd6cab2656c281412cc22.png",
//     title: "Всё везде и сразу",
//     ratingsSummary: 7.7,
//   },
// ];


const AllMovies = () => {
  
const movieList = useSelector(MovieSelectors.getAllMovies);
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllMovies());
}, []);

console.log(movieList);

  return (
    <div>
      <FilmList filmList={movieList} />
    </div>
  );
};

export default AllMovies;
