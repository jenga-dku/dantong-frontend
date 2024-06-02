export type Question = {
  tag: QuestionType;
  title: string;
  description: string;
  options: string[];
};
export type QuestionType = 'SUBJECTIVE' | 'MULTIPLE';
