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
  userId: number;
};

export type SurveyItemTag = 'SUBJECTIVE' | 'MULTIPLE';
