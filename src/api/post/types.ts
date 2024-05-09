export type PostListResponse = Post[];

export type Post = {
  userId: string;
  title: string;
  description: string;
  content: string;
  date: string;
  status: string;
  cateogry: 'EVENT' | 'NOTICE' | 'PARTNERSHIP';
};
