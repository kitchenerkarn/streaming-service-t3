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
    url: `${API_URL as string}/trending/movie/day?API_KEY as string=${
      API_KEY as string
    }&language=en-US`,
  },
  fetchTrending: {
    title: "Trending",
    url: `${API_URL as string}/trending/movie/week?API_KEY as string=${
      API_KEY as string
    }&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `${API_URL as string}/movie/top_rated?API_KEY as string=${
      API_KEY as string
    }&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `${API_URL as string}/discover/movie?API_KEY as string=${
      API_KEY as string
    }&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `${API_URL as string}/discover/movie?API_KEY as string=${
      API_KEY as string
    }&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `${API_URL as string}/discover/movie?API_KEY as string=${
      API_KEY as string
    }&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `${API_URL as string}/discover/movie?API_KEY as string=${
      API_KEY as string
    }&with_genres=10749`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `${API_URL as string}/discover/movie?API_KEY as string=${
      API_KEY as string
    }&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `${API_URL as string}/discover/movie?API_KEY as string=${
      API_KEY as string
    }&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `${API_URL as string}/discover/movie?API_KEY as string=${
      API_KEY as string
    }&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `${API_URL as string}/discover/movie?API_KEY as string=${
      API_KEY as string
    }&with_genres=10770`,
  },
  fetchMovieById: {
    title: "TV Movie",
    url: `${API_URL as string}/movie/movieId/?API_KEY as string=${
      API_KEY as string
    }&language=en-US`,
  },
};

export default requests;
