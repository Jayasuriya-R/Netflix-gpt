import { API_Options } from "../utils/constant";
const useMovieSearch = (movie) =>{

    
    const searchMovieResult = async (movie)=>{
       const data = await fetch(
             "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
             API_Options
           );
           const jsonData = await data.json();
           return jsonData.results;
         };
       
      return searchMovieResult(movie);
    
}
export default useMovieSearch;