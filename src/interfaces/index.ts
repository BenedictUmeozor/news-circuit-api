export interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface News {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string | null;
  category: string;
  language: string;
  country: string;
  published_at: string;
}

export interface NewsResponse {
  pagination: Pagination;
  data: News[];
}

export interface ReqQuery {
  categories?: string;
  keywords?: string;
  limit?: string;
  offset?: string;
  languages?: string;
}
