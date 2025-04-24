import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log(movies)
    // if(!movies) return

  return (
    <div className="px-4 bg-black text-white">
        <h1 className="font-bold text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll ">
        
        <div className="flex ">
            {movies?.map((x)=>{
          return <MovieCard key={x.id} posterPath={x.poster_path} /> })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
