import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { useEffect } from "react";
import {addPopularMovie, addTopRatedMovie} from "../utils/movieSlice";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();

  const getTopRatedMovie = async () => {
    const popularMovie = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_Options
    );
    const jsonPopularMovie = await popularMovie.json();
    // console.log(jsonPopularMovie)
     dispatch(addTopRatedMovie(jsonPopularMovie.results));
  };

  useEffect(() => {
    getTopRatedMovie();
  }, []);
};

export default useTopRatedMovie;
