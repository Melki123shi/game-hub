import { genres } from "../data/genre.ts";

export interface Genre {
  _id: string;
  name: string;
  slug: string;
  image_background: string;
}

export const UseGenres = () => ({
  data: genres,
  isLoading: false,
  error: false,
});
