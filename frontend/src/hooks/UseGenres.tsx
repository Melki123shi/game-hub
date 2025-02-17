import { UseData } from "./UseData";

export interface Genre {
  _id: string;
  name: string;
  slug: string;
  image_background: string;
}
export const UseGenres = () => UseData<Genre>("/genres");