import { addTrailerVideo } from "../utils/movieSlice";
import { API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
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
};
export default useMovieTrailer;
