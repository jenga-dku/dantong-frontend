import { ReactNode } from 'react';
import { QuestionType } from '@/api/form-upload/types';
import { BsTextareaT } from 'react-icons/bs';
import { RiListRadio } from 'react-icons/ri';
import {
  QuestionTypeButton,
  QuestionTypeButtonChangeEvent,
} from './components/button/QuestionTypeButton';
import { RxCross2 } from 'react-icons/rx';
import { FormUploadState } from '@/types/form';

type QuestionTypeButton = { type: QuestionType; icon: ReactNode };

const questionTypeList: QuestionTypeButton[] = [
  { type: 'SUBJECTIVE', icon: <BsTextareaT /> },
  { type: 'MULTIPLE', icon: <RiListRadio /> },
];
export const QuestionHeader = ({
  questionIndex,
  questionList,
  dispatch,
}: FormUploadState) => (
  <div className="flex justify-between text-zinc-400">
    <div className="flex gap-3">
      {questionTypeList.map(({ type, icon }) => (
        <QuestionTypeButton
          index={questionIndex}
          icon={icon}
          value={type}
          checked={questionList[questionIndex].tag === type}
          onChange={(e: QuestionTypeButtonChangeEvent) => {
            dispatch({
              type: 'changeQuestionType',
              questionIndex,
              questionType: e.target.value,
            });
          }}
        />
      ))}
    </div>
    <button>
      <RxCross2
        onClick={() => {
          dispatch({
            type: 'deleteQuestion',
            questionIndex,
          });
        }}
      />
    </button>
  </div>
);
