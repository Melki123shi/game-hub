import { useEffect, useState } from "react";
import axiosClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  platforms: string[];
  genres: string[];
}

export interface GameGridResponse {
  count: number;
  results: Game[];
}
export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    axiosClient.get<GameGridResponse>("/games").then(
      (response) => {
        setGames(response.data.results);
        console.log(response.data);
      },
      (error) => {
        if (error instanceof AbortController) return;
        setError(error.message);
      }
    );

    return () => controller.abort();
  }, []);

  return { games, error };
};
