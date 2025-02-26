import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platform.ts";
import apiClient from "@/services/api-client.ts";
import { GridResponse } from "./UseData.tsx";

export interface Platform {
  _id: string;
  name: string;
}

export const UsePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<GridResponse<Platform>>("/platforms")
        .then((res) => res.data.results || []),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
