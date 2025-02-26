import { genres } from "@/data/genre";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  _id: string;
  name: string;
  slug: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

export const UseGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 90 * 24 * 1000,
    initialData: genres
  });
