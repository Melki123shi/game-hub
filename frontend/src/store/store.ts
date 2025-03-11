import Genre from "@/entities/Genre";
import Platform from "@/entities/Platform";
import { create } from "zustand";

export interface GameQuery {
  genre?: Genre;
  platform?: Platform | null;
  sortBy?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setsearchText: (searchText: string) => void;
  setselectPlatform: (platform: Platform) => void;
  setunselectPlatform: () => void;
  setsortGame: (sortBy: string) => void;
  setselectGenre: (genre: Genre) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setsearchText: (text) =>
    set(() => ({ gameQuery: { searchText: text } })),

  setselectPlatform: (platform) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platform } })),
  setunselectPlatform: () =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platform: null } })),
  setsortGame: (sortBy) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortBy } })),
  setselectGenre: (genre) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genre } })),
}));

export default useGameQueryStore;