import { Pagination } from './pagination';

export interface ReelsOutput {
  reels: Reel[];
  pagination: Pagination;
}

export interface Reel extends Pagination {
  title: string;
  released: Date;
  cast: string[];
  cover: string;
  genres?: string[];
  description: string;
  rated?: boolean;
  totalRating: number;
  userRating: number;
}
