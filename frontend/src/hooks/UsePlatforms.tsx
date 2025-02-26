import { useQuery } from "@tanstack/react-query";
import { platforms } from "../data/platform.ts";
import ApiClient from "@/services/api-client.ts";

export interface Platform {
  _id: string;
  name: string;
}

const apiClient = new ApiClient<Platform>("/platforms");

export const UsePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
