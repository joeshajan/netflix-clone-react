export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'd074a729a940529c071518179a2e493a';
export const BANNER_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

export const TRENDING = `/trending/all/week?api_key=${API_KEY}&language=en-US`
export const NETFLIX_ORIGINALS = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const ACTIONS = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const COMEDY = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const HORROR = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const ROMANCE = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const DOCUMENTARIES = `/discover/movie?api_key=${API_KEY}&with_genres=99`