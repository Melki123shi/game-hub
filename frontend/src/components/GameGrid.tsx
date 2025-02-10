import { Text, VStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axiosClient from "../services/api-client";

const GameGrid = () => {
  interface Game {
    id: number;
    name: string;
    released: string;
    background_image: string;
    rating: number;
    platforms: string[];
    genres: string[];
  }

  interface GameGridResponse {
    count: number;
    results: Game[];
  }

  useEffect(() => {
    axiosClient.get<GameGridResponse>("/games").then(
      (response) => {
        setGames(response.data.results);
        console.log(response.data);
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

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
