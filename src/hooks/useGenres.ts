import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

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
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
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
