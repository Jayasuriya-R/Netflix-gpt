import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import logo from "../Assets/Gpt-bg.png";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={logo} alt="logo" />
      </div>
      <GptSearchBar />
     <GptMovieSuggestion/>
    </div>
  );
};

export default GptSearchPage;
