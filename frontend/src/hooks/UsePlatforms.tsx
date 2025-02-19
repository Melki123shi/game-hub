import { platforms } from "../data/platform.ts";

export interface Platform {
  _id: number;
  name: string;
}

export const UsePlatforms = () => ({
  data: platforms,
  isLoading: false,
  error: false,
});
