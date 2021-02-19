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

  const tvs = await data.results;

  return tvs;
};

export const searchByKeyword = async (media, name) => {
  const encodedUri = encodeURIComponent(media);
  const encodedName = encodeURIComponent(name);

  const api_call = await fetch(
    `${BASE_URL}/search/${encodedUri}?api_key=${API_KEY}&query=${encodedName}`
  );

  const data = await api_call.json();

  const searchResults = await data.results;

  return searchResults;
};
