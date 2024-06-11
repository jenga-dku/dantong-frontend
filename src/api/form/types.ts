import { PostStatus } from '../../types/post-status';

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
