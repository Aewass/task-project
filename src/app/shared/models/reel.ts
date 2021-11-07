export interface Reel {
  title: string;
  release: Date;
  cast: string[];
  cover: string;
  genres?: string[];
  description: string;
  rated?: boolean;
  totalRating: number;
  userRating: number;
}
