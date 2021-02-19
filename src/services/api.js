import axios from "axios";

import { API_KEY, BASE_URL } from "../config/api_config";

export const getMovies = async (selectedCat) => {
  const encodedUri = encodeURIComponent(selectedCat);

  const api_call = await fetch(
    `${BASE_URL}/movie/${encodedUri}?api_key=${API_KEY}`
  );

  const data = await api_call.json();

  const movies = await data.results;

  return movies;
};

export const getTvs = async (selectedCat) => {
  const encodedUri = encodeURIComponent(selectedCat);

  const api_call = await fetch(
    `${BASE_URL}/tv/${encodedUri}?api_key=${API_KEY}`
  );

  const data = await api_call.json();

  const movies = await data.results;

  return movies;
};
