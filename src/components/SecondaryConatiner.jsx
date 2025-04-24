import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
    const movies = useSelector(store => store.movie.nowPlayingMovie)
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Trending"} movies={movies}/>
      <MovieList title={"Popular"} movies={movies}/>
      <MovieList title={"Upcoming "} movies={movies}/>
      
    </div>
  )
}

export default SecondaryConatiner
