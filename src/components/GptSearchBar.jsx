import React from "react";
import languageConstant from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.lang?.ln)
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 rounded-xs bg-black grid grid-cols-12">
        <input
          type="text"
          className="border-1 p-4 my-4 rounded-xs ml-3 bg-white col-span-9"
          placeholder={languageConstant[langKey].placeHolder}
        />
        <button className="px-4 py-2 my-4 ml-2 mr-3 cursor-pointer bg-red-800 rounded-xs col-span-3 text-white">
          {languageConstant[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
