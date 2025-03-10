import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Game } from "./useGames";
import ms from "ms";

export const useGameDetail = (slug: string) => {
  const apiClient = new ApiClient<Game>('/games');

  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.getGame(slug),
    staleTime: ms("1hr"),
  });
};
