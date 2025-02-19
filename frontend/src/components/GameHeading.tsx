import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery  
}

const GameHeading = ({ gameQuery }: Props) => {
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
