import type { NextApiRequest, NextApiResponse } from "next";
import { MovieItemType } from "~/types";
import requests from "~/utils/requests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  const highlighted: MovieItemType[] = await fetch(
    `${apiUrl}${requests.highlightedMovie.url}`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  const trending: MovieItemType[] = await fetch(
    `${apiUrl}${requests.fetchTrending.url}`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  const comedy: MovieItemType[] = await fetch(
    `${apiUrl}${requests.fetchComedyMovies.url}`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  const action: MovieItemType[] = await fetch(
    `${apiUrl}${requests.fetchActionMovies.url}`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  const horror: MovieItemType[] = await fetch(
    `${apiUrl}${requests.fetchHorrorMovies.url}`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  res.send({ highlighted, trending, comedy, action, horror });
}
