import useGameQueryStore from "@/store/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  return (
    <Heading as="h1" size="6xl" marginY={8}>
      {gameQuery.genre ? gameQuery.genre.name : ""}{" "}
      {gameQuery.platform
        ? gameQuery.platform.name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        : ""}
    {" "} Games
    </Heading>
  );
};

export default GameHeading;


