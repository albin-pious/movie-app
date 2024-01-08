import { API_KEY } from "./constants/constant";

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const hollybood = `discover/movie?include_video=false&language=en-US&page=1&api_key=${API_KEY}`
export const hindi = `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=hi&api_key=${API_KEY}`
export const tamil = `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=ta&year=2023&api_key=${API_KEY}`
export const newReleases = `discover/movie?include_adult=false&include_video=false&language=en-US&year=2022&api_key=${API_KEY}`
export const blockbuster = `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&region=in&sort_by=revenue.desc&watch_region=in&api_key=${API_KEY}`
export const horror = `discover/movie?api_key=${API_KEY}&with_genres=27`
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const romantic = `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const thriller = `discover/movie?api_key=${API_KEY}&with_genres=53`
export const adventureAction = `discover/movie?api_key=${API_KEY}&with_genres=12`