import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  //using custom hook instead =>
  const genre = useGenre(genreId);
  // const { data: genres } = useGenres();
  // const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  //using custom hook instead =>
  const platform = usePlatform(platformId);
  // const { data: platforms } = usePlatforms();
  // const platform = platforms?.results.find(
  //   (p) => p.id === gameQuery.platformId
  // );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
