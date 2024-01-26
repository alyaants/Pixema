import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesList } from "../router";
import { useDispatch, useSelector } from "react-redux";
import style from "./search.module.scss";
import {
  MovieSelectors,
  getSearchedMovies,
} from "../../redux/reducers/movieSlice";
import Title from "../../components/title/title";
import FilmCard from "../../components/filmCard/filmCard";
import EmptyState from "../../components/emptyState/emptyState";

const Search = () => {
  const { search } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchedMovie = useSelector(MovieSelectors.getSearchedMovies);
  console.log(searchedMovie);
  

  useEffect(() => {
    if (!search) {
      navigate(RoutesList.AllMovies);
    } else {
      dispatch(getSearchedMovies(search));
    }
  }, [search]);


  return (
    <div>
      <Title title={`Search results: ${search}`} />
      <div >
        {searchedMovie.length ? (
          <>
          <div className={style.container}>{searchedMovie.map((movie) => {
              return <FilmCard {...movie} />;
            })}
            </div>
            
          </>
        ) : (
          <EmptyState
            title={"Nothing was found..."}
            description={"Try another search request"}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
