import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";
("../services/api-client");

const apiClient = new APIClient<Genre>("/genres");
// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenres = () => useData<Genre>("/genres");

//fetching static data from genres.ts =>
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

// Using reactQuery to fetch the genres =>
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    //Using ms to calculate time instead =>
    staleTime: ms("24h"),
    // staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres,
  });

//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);

//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };

export default useGenres;
