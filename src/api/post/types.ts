import { UserInfoResponse } from '../user/types';

export type PostListResponse = {
  content: PostDetailResponse[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export type PostDetailResponse = {
  postId: number;
  surveyId: number;
  title: string;
  description: string;
  content: string;
  date: string;
  status: string;
  category: 'EVENT' | 'NOTICE' | 'PARTNERSHIP';
  postFileResponse: PostFileResponse[];
  userResponse: UserInfoResponse;
};

export type PostFileResponse = {
  id: number;
  url: string;
  originalName: string;
  mediaType: string;
};
