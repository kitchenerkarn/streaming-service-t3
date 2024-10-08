import type { NextApiRequest, NextApiResponse } from "next";
import type { MovieItemType } from "~/types";
import requests, { type ReturnObjectItemType } from "~/utils/requests";

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
  const results = {
    highlighted: await fetchCategory(requests.highlightedMovie),
    trending: await fetchCategory(requests.fetchTrending),
    action: await fetchCategory(requests.fetchActionMovies),
    comedy: await fetchCategory(requests.fetchComedyMovies),
    horror: await fetchCategory(requests.fetchHorrorMovies),
  };

  res.send(results);
}
