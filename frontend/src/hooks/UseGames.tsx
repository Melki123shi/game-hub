import { GameQuery } from "@/App";
import { GridResponse } from "./UseData";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";

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
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.get<GridResponse<Game>>(
        "/games",
        {
          params: {
            genre: gameQuery.genre?.name,
            platform: gameQuery.platform?.name,
            sortBy: gameQuery.sortBy,
            search: gameQuery.searchText,
          },
        }
      ).then((res) => res.data.results || []),
    staleTime: 10 * 1000,
  });
