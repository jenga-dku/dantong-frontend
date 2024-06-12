import { PostStatus } from '../../types/post-status';
import { Question } from '../form-upload/types';

export type FormResponse = {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  surveyItems: SurveyItem[];
};

export type SurveyItem = {
  surveyItemId: number;
  tag: SurveyItemTag;
  title: string;
  description: string;
  options: string[];
};

export type FormAnswer = {
  surveyItemId: number;
  content: string;
};

export type SurveyItemTag = 'SUBJECTIVE' | 'MULTIPLE';

export type FormListResponse = {
  content: FormListItem[];
};

export type FormListItem = {
  surveyId: number;
  title: string;
  postId: number;
  startTime: string;
  endTime: string;
  status: PostStatus;
  submitCount: number;
};

export type AllUsersReplyResponse = {
  surveyItemResponse: {
    surveyItemId: number;
    title: string;
    tag: string;
    options: string[];
    description: string;
  };
  replies: FormAnswer[];
};

export type MySubmitResponse = {
  surveyId: number;
  surveyReplies: MySubmitItemDetail[];
};

export type MySubmitItemDetail = {
  surveyReplyId: number;
  surveyItem: Question & { surveyItemId: number };
  content: string;
};
