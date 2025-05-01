import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const nowPlayingmovies = useSelector((store) => store.movie.nowPlayingMovie);
  const popularMovies = useSelector((store) => store.movie.popularMovie);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovie);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovie);
  return (
    <div className="bg-black px-3 ">
      <div className="mt-0 md:-mt-60  relative z-10 ">
        <MovieList title={"Now Playing"} movies={nowPlayingmovies} />
      </div>
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Upcoming"} movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryConatiner;
