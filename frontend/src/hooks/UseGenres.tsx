import { useData } from "./useData";

interface Genre {
  id: number;
  name: string;
  slug: string;
}
export const UseGenres = () => useData<Genre>("/genres");