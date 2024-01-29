import FilmList from "../../components/filmList/filmList";

import { useDispatch, useSelector} from "react-redux";
import { MovieSelectors, getAllMovies } from "../../redux/reducers/movieSlice";
import {  useEffect } from "react";




const AllMovies = () => {
  
const movieList = useSelector(MovieSelectors.getAllMovies);
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllMovies({}));
}, []);

let years = '2000-2004'
console.log(movieList);

  return (
    <div>
      <FilmList filmList={movieList} />
    </div>
  );
};

export default AllMovies;