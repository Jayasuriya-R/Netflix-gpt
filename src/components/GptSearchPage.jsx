import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import logo from "../Assets/Gpt-bg.png";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover w-screen" src={logo} alt="logo" />
      </div>
      <div className="pt-[30%] md:p-0">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>
  );
};

export default GptSearchPage;
