import { Text, SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../hooks/UseGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";

const GameGrid = () => {
  const { data, error, loading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={"39px"}
        margin={{ base: 4, sm: 24, md: 12, lg: 23, xl: 24 }}
        >
        {loading && skeleton.map(() => <LoadingSkeleton />) }
        {data && data.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
