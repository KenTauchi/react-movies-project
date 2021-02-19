import axios from "axios";

import { API_KEY, BASE_URL } from "../config/api_config";

// export const getMovies = async (movieName) => {
//   const url = BASE_URL;
//   try {
//     const response = await axios.get(url, {
//       params: {
//         q: movieName,
//         api_key: APP_KEY,
//       },
//     });

//     const movies = response.data.hits;

//     console.log(movies);

//     return recipes;
//   } catch (error) {
//     throw error;
//   }
// };
export const getMovies = async (selectedCat) => {
  const encodedUri = encodeURIComponent(selectedCat);

  const api_call = await fetch(
    `${BASE_URL}/movie/${encodedUri}?api_key=${API_KEY}`
  );

  const data = await api_call.json();

  const movies = await data.results;

  return movies;
};

// export const getRecipe = async (recipeUri) => {
//   const encodedUri = encodeURIComponent(recipeUri);

//   const api_call = await fetch(
//     `${BASE_URL}?r=${encodedUri}&app_id=${APP_ID}&app_key=${APP_KEY}`
//   );

//   const data = await api_call.json();

//   const recipe = data[0];

//   return recipe;
// };
