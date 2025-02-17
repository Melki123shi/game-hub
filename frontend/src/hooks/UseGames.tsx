import { UseData } from "./UseData";
import { Genre } from "./UseGenres";
import { Platform } from "./UsePlatforms";

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

export const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  UseData<Game>(
    "/games",
    {
      params: { genre: selectedGenre?.name, platform: selectedPlatform?.name },
    },
    [selectedGenre?.name, selectedPlatform?.name]
  );
