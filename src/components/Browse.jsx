import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatiner from "./MainConatiner";
import SecondaryConatiner from "./SecondaryConatiner";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import getMovieRecommendations from "../utils/grogApi";
import LoadingIcon from "./LoadingIcon";


const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const nowPlayingMovie = useSelector(store=> store.movie.nowPlayingMovie)
  //created a custom hook for this fetch request.
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div>
  <Header />

  {showGptSearch ? (
    <GptSearchPage />
  ) : !nowPlayingMovie ? (
    <LoadingIcon/>
  ) : (
    <>
      <MainConatiner />
      <SecondaryConatiner />
    </>
  )}
</div>
  );
};

export default Browse;
