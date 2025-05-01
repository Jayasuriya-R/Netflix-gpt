import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies)
  // if(!movies) return

  return (
    <div className="md:px-4  text-white">
      <h1 className="font-bold text-lg md:text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((x) => {
            return <MovieCard key={x.id} posterPath={x?.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
