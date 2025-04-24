import React, { useEffect } from "react";
import { API_Options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const trailerKey = useSelector((store) => store.movie?.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1197306/videos?language=en-US",
      API_Options
    );
    const jsonData = await data.json();
    // console.log(jsonData.results);
    const filteredData = jsonData.results.filter((x) => x.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerKey?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
