export interface IReel {
  title: string;
  released: Date;
  cast: string[];
  rating: number;
  cover: string;
  description: string;
  userRating?: string;
  rated?: boolean;
}
