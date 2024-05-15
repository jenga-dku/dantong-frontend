export type Question = {
  tag: QuestionType;
  title: string;
  description: string;
};
export type QuestionType = 'SUBJECTIVE' | 'MULTIPLE';
