import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import ms from 'ms';
import { GameQuery } from "@/store/store";
import Game  from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");
export const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genre: gameQuery.genre?.name,
          platform: gameQuery.platform?.name,
          sortBy: gameQuery.sortBy,
          search: gameQuery.searchText,
        },
      }),
    staleTime: ms("1hr"),
  });
