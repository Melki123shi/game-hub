import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axiosClient from "../services/api-client";
// import axios from "axios";


const GameGrid = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface GameGridResponse {
    count: number;
    results: Game[];
  }

  useEffect(() => {
    axiosClient.get<GameGridResponse>("/games").then(
      (response) => {
        setGames(response.data.results);
        console.log(response)
      },
      (error) => {
        setError(error.message);
      }
    );
    // const fetchGame = async() => {
    //   const options = {
    //     method: "GET",
    //     url: "https://rawg-video-games-database.p.rapidapi.com/games",
    //     headers: {
    //       "x-rapidapi-key": "e34eb4e3b2msh7049b810c7b3b31p15b583jsnd0b3a737a038",
    //       "key": "e34eb4e3b2msh7049b810c7b3b31p15b583jsnd0b3a737a038",
    //       "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    //     },
    //   };
  
    //   try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    // fetchGame();

    
  }, []);

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      {error ?? <Text>{error}</Text>}
      {games.map((game) => (
        <Text key={game.id}>{game.name}</Text>
      ))}
    </>
  );
};

export default GameGrid;
