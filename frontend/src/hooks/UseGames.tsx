import { GameQuery } from "@/App";
import { UseData } from "./UseData";

export interface Game {
  _id: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  platforms: string[];
  genres: string[];
  criticScore: number;
}

export const useGames = (gameQuery: GameQuery) =>
  UseData<Game>(
    "/games",
    {
      params: {
        genre: gameQuery.genre?.name,
        platform: gameQuery.platform?.name,
        sortBy: gameQuery.sortBy,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
