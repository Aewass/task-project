export interface Pagination {
  hasNext?: boolean;
  next?: number;
  page?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
