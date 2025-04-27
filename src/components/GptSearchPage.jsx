import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import {netflixBg} from "../utils/constant"


const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
              <img
                src={netflixBg}
                alt="logo"
              />
            </div>
           
      <GptSearchBar/>
      <GptMovieSuggestion/>
      
    </div>
  )
}

export default GptSearchPage;
