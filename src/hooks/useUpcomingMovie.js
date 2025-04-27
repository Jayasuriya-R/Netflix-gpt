import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { useEffect } from "react";
import {
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} from "../utils/movieSlice";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  const getUpcomingMovie = async () => {
    const popularMovie = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_Options
    );
    const jsonPopularMovie = await popularMovie.json();
    // console.log(jsonPopularMovie)
    dispatch(addUpcomingMovie(jsonPopularMovie.results));
  };

  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingMovie;
