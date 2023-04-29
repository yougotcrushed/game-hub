import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
// Fetching the platforms
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// Fetching the platforms with the static shipped data
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// Using reactQuery to fetch the data
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
