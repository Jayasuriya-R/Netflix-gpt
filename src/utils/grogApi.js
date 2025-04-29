import { API_KEY } from "./constant";
async function getMovieRecommendations() {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "meta-llama/llama-4-scout-17b-16e-instruct", // a big strong model
      messages: [
        { role: "system", content: "You are a movie recommendation system. suggest some movies" },
        { role: "user", content: `Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: don, Maan Karate, Godfather, Kilukkam ` }
      ],
      temperature: 0.7
    })
  });

  const data = await response.json();
  console.log(data.choices);
}

export default getMovieRecommendations;