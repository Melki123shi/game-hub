import { Text, VStack, Image } from "@chakra-ui/react";
import useGames from "../hooks/UseGames";

const GameGrid = () => {
 const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games &&
          games.map((game) => (
            <li>
              <VStack>
                <Image src={game.background_image} boxSize={211} ></Image>
                <Text key={game.id}>{game.name}</Text>
              </VStack>
            </li>
          ))}
      </ul>
    </>
  );
};

export default GameGrid;
