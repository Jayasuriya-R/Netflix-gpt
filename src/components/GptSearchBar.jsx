import React, { useState } from "react";
import languageConstant from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.lang?.ln);
  const searchTxt = useSelector((store) => store.gpt.searchInput);
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="pt-[10%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2 rounded-xs bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="border-1 p-4 my-4 rounded-xs ml-3 bg-white col-span-9"
          onChange={handleInputChange}
          placeholder={languageConstant[langKey].placeHolder}
        />
        <button
          className="px-4 py-2 my-4 ml-2 mr-3 cursor-pointer bg-red-800 rounded-xs col-span-3 text-white"
          onClick={() => dispatch(setSearchInput(userInput))}
        >
          {languageConstant[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
