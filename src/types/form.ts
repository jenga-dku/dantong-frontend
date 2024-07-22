import { Question, QuestionType } from '@/api/form-upload/types';

export type FormUploadActionType = {
  type: string;
  questionIndex?: number;
  questionType?: QuestionType;
  inputName?: string;
  inputValue?: string;
  optionIndex?: number;
  optionValue?: string;
};

export type FormUploadState = {
  dispatch: React.Dispatch<FormUploadActionType>;
  questionList: Question[];
  questionIndex: number;
};
