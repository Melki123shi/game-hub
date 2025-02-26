import { Text, SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../hooks/UseGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;
  
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={"37px"}>
      {isLoading && skeleton.map((skelet) => <LoadingSkeleton key={skelet} />)}
      {games && games.map((game) => <GameCard key={game._id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
