import type { NextApiRequest, NextApiResponse } from "next";
import { MovieItemType } from "~/types";
import requests, { ReturnObjectItemType } from "~/utils/requests";

interface RequestFetchDataType {
  page: number;
  results: MovieItemType[];
  total_pages: number;
  total_results: number;
}

async function fetchCategory(request: ReturnObjectItemType) {
  try {
    const data: RequestFetchDataType = await fetch(request.url)
      .then((res) => res.json())
      .then((data: RequestFetchDataType) => data);
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const highlighted = await fetchCategory(requests.highlightedMovie);
  const results = {
    highlighted: highlighted?.[0],
    trending: await fetchCategory(requests.fetchTrending),
    action: await fetchCategory(requests.fetchActionMovies),
    comedy: await fetchCategory(requests.fetchComedyMovies),
    horror: await fetchCategory(requests.fetchHorrorMovies),
  };

  res.send(results);
}
