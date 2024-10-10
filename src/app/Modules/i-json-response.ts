import { iPost } from './i-post';

export interface JsonResponse {
  posts: iPost[];
  total: number;
  skip: number;
  limit: number;
}
