import { useData } from "./useData";

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
export const UseGenres = () => useData<Genre>("/genres");