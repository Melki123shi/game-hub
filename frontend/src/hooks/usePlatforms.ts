import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platform.ts";
import ApiClient from "@/services/api-client.ts";
import ms from 'ms';
import Platform from "../entities/Platform.ts";

const apiClient = new ApiClient<Platform>("/platforms");

export const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24hr"),
    initialData: platforms,
  });
