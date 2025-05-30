import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-3 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 shadow-md hover:shadow-xl">
      <img src={IMG_CDN + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
