export type PostListResponse = PostDetailResponse[];

export type PostDetailResponse = {
  postId: number;
  title: string;
  description: string;
  content: string;
  date: string;
  status: string;
  category: 'EVENT' | 'NOTICE' | 'PARTNERSHIP';
};
