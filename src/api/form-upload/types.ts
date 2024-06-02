export type Question = {
  tag: QuestionType;
  title: string;
  description: string;
  options: string[];
};
export type QuestionType = 'SUBJECTIVE' | 'MULTIPLE';

export type FormUpload = {
  title: string;
  description: string;
  postId: number;
  startTime: string;
  endTime: string;
  surveyItems: Question[];
};
