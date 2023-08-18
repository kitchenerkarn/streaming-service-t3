const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export interface ReturnObjectItemType {
  title: string;
  url: string;
}

export type ReturnObjectKeys =
  | "highlightedMovie"
  | "fetchTrending"
  | "fetchTopRated"
  | "fetchActionMovies"
  | "fetchComedyMovies"
  | "fetchHorrorMovies"
  | "fetchRomanceMovies"
  | "fetchSciFi"
  | "fetchWestern"
  | "fetchAnimation"
  | "fetchTV"
  | "fetchMovieById";

const requests: Record<ReturnObjectKeys, ReturnObjectItemType> = {
  highlightedMovie: {
    title: "Highlighted Movie",
    url: `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  },
  fetchTrending: {
    title: "Trending",
    url: `${API_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  fetchMovieById: {
    title: "TV Movie",
    url: `${API_URL}/movie/movieId/?api_key=${API_KEY}&language=en-US`,
  },
};

export default requests;
