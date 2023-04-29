import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

// Fetchin the games......
// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

// Fetching the games with reactquery........
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

// const [games, setGames] = useState<Game[]>([]);
// const [error, setError] = useState("");
// const [isLoading, setLoading] = useState(true);

// useEffect(() => {
//   const controller = new AbortController();

//   setLoading(true);

//   apiClient
//     .get<FetchGamesResponse>("/games", { signal: controller.signal })
//     .then((res) => {
//       setGames(res.data.results);
//       setLoading(false);
//     })
//     .catch((err) => {
//       if (err instanceof CanceledError) return;
//       setError(err.message);
//       setLoading(false);
//     });

//   return () => controller.abort();
// }, []);

// return { games, error, isLoading };
export default useGames;
