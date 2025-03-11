
export default interface Game {
  _id: string;
  name: string;
  slug: string;
  description: string;
  released: string;
  background_image: string;
  rating: number;
  platforms: string[];
  genres: string[];
  criticScore: number;
}
