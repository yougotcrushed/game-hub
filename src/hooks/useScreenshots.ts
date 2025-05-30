import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshort from "../entities/Screenshots";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshort>(
    "/games/" + gameId + "/screenshots"
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
