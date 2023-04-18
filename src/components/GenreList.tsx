import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { list } from "@chakra-ui/react";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
