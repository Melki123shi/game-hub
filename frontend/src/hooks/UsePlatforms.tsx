import { UseData } from "./UseData.tsx";

export interface Platform {
  _id: number;
  name: string;
}

export const UsePlatforms = () => UseData<Platform>("/platforms");
