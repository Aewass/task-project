export interface IReel {
  title: string;
  released: Date;
  cast: string[];
  rating: number;
  cover: string;
  genres?: string[];
  description: string;
  rated?: boolean;
  totalRating: number;
  userRating: number;
}
