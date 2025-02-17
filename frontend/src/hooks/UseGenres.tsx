import { useData } from "./useData";

export interface Genre {
  _id: string;
  name: string;
  slug: string;
  image_background: string;
}
export const UseGenres = () => useData<Genre>("/genres");