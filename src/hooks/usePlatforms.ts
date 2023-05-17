import platforms from "../data/platforms";
import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";
("../services/api-client");

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
// Fetching the platforms
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// Fetching the platforms with the static shipped data
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// Using reactQuery to fetch the data
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    //Using ms to calculate time instead =>
    staleTime: ms("24h"),
    // staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platforms,
  });

export default usePlatforms;
