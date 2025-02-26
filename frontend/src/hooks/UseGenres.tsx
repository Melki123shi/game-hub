import { genres } from "@/data/genre";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { GridResponse } from "./UseData";

export interface Genre {
  _id: string;
  name: string;
  slug: string;
  image_background: string;
}

export const UseGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<GridResponse<Genre>>("/genres")
        .then((res) => res.data.results || []),
    staleTime: 24 * 90 * 24 * 1000,
    initialData: genres
  });
