import { genres } from "@/data/genre";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import Genre from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

export const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24hr"),
    initialData: genres
  });
