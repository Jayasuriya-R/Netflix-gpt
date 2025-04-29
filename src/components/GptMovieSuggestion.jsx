import React, { useEffect } from "react";
import { API_KEY } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addGptResult } from "../utils/gptSlice";
import useMovieSearch from "../hooks/useMovieSearch";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const searchTxt = useSelector((store) => store.gpt.searchInput);
  const dispatch = useDispatch();
  const {movieName = [], movieApiRes = []} = useSelector((store ) => store.gpt?.gptResult || {})
  
  // Get it free from groq.com
  
  async function getMovieRecommendations(searchTxt) {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-scout-17b-16e-instruct", // a big strong model
          messages: [
            {
              role: "system",
              content:
                "You are a movie recommendation system. suggest some movies",
            },
            {
              role: "user",
              content: `Only give me names of 5 movies ${searchTxt}, comma separated like the example result given ahead. Example Result: don, Maan Karate, Godfather, Kilukkam `,
            },
          ],
          temperature: 0.7,
        }),
      }
    );
    const data = await response.json();

    const movieResult = data.choices[0]?.message?.content.split(",");

    const suggestion = movieResult.map((movie) => useMovieSearch(movie));
    // returns array of promises

    const TMDBResult = await Promise.all(suggestion);
    dispatch(addGptResult({ movieName: movieResult, movieApiRes: TMDBResult }));
  }

  useEffect(() => {
    getMovieRecommendations(searchTxt);
  }, [searchTxt]);

  // getMovieRecommendations();

  if(searchTxt == "") return null
  return (
    <div className="bg-gray-500/40 p-4 m-4 text-white">
      { movieName.map((movieName,index) =>(
      <MovieList key={movieName} title={movieName} movies={movieApiRes[index]}/>))
}
    </div>
  );
};

export default GptMovieSuggestion;
