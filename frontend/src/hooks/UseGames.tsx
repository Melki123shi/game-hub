import { useData } from "./useData";
import { Genre } from "./UseGenres";

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

export const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", {params : {genre : selectedGenre?.name}}, [selectedGenre?.name]);