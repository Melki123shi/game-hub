import { useData } from "./useData";

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  platforms: string[];
  genres: string[];
  criticScore: number;
}

export const useGames = () => useData<Game>("/games");