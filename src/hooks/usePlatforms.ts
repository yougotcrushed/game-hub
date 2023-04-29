import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
("../services/api-client");

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
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
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
