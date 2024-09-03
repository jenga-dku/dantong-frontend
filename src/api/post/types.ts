import { PostStatus } from '@src/types/post-status';
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
  title: string;
  description: string;
  content: string;
  startTime: string;
  endTime: string;
  status: PostStatus;
  category: 'EVENT' | 'NOTICE' | 'PARTNERSHIP';
  postFileResponse: PostFileResponse[];
  userResponse: UserInfoResponse;
  surveySummaryResponse: FormSummaryResponse;
  surveyId: number;
};

export type PostDeleteResponse = {
  timestamp: string;
  trackingId: string;
  status: string;
  code: string;
  message: [];
};

export type FormSummaryResponse = {
  surveyId: number;
  title: string;
  postId: number;
  startTime: string;
  endTime: string;
};

export type PostFileResponse = {
  id: number;
  url: string;
  originalName: string;
  mediaType: string;
};
