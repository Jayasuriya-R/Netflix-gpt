import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { useEffect } from "react";
import {addPopularMovie} from "../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const popularMovie = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
      API_Options
    );
    const jsonPopularMovie = await popularMovie.json();
    // console.log(jsonPopularMovie)
     dispatch(addPopularMovie(jsonPopularMovie.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
