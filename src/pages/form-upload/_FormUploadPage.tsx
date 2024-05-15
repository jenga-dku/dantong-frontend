import { ReactNode, useEffect, useState } from 'react';
import { Box } from '../../components/Box';
import 'react-datepicker/dist/react-datepicker.css';
import { Period } from '../../components/period-picker';
import { TbPlus } from 'react-icons/tb';
import { Question, QuestionType } from '../../api/upload-form/types';
import { SubmitButton } from '../../components/SubmitButton';
import { RiListRadio } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { BsTextareaT } from 'react-icons/bs';
import {
  QuestionTypeButton,
  QuestionTypeButtonChangeEvent,
} from './QuestionTypeButton';
import { Header } from './Header';
export const FormUploadPage = () => {
  const defaultQuestion: Question = {
    tag: 'SUBJECTIVE',
    title: '',
    description: '',
  };
  const [questionList, setQuestionList] = useState<Question[]>([
    defaultQuestion,
  ]);
  const periodState = useState<Period>({
    start: new Date(),
    end: new Date(),
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  type QuestionTypeButton = { type: QuestionType; icon: ReactNode };
  const questionTypeList: QuestionTypeButton[] = [
    { type: 'SUBJECTIVE', icon: <BsTextareaT /> },
    { type: 'MULTIPLE', icon: <RiListRadio /> },
  ];
  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        submitForm(e);
      }}
    >
      <Header periodState={periodState} />
      {questionList.map(({ tag: questionType }, index) => (
        <Box className="flex flex-col gap-3" key={`question-${index}`}>
          <div className="flex justify-between text-zinc-400">
            <div className="flex gap-3">
              {questionTypeList.map(({ type, icon }) => (
                <QuestionTypeButton
                  index={index}
                  icon={icon}
                  value={type}
                  checked={questionList[index].tag === type}
                  onChange={(e: QuestionTypeButtonChangeEvent) => {
                    setQuestionList((prev) => {
                      return [
                        ...prev.slice(0, index),
                        { ...prev[index], tag: e.target.value },
                        ...prev.slice(index + 1),
                      ];
                    });
                  }}
                />
              ))}
            </div>
            <button>
              <RxCross2 />
            </button>
          </div>
          <input type="text" placeholder="질문을 입력해주세요" />
          <input
            type="text"
            className="ml-[-35px] scale-[0.8] text-[16px] text-zinc-500"
            placeholder="설명을 입력해주세요"
          />
          {questionType === 'SUBJECTIVE' ? (
            <input
              type="text"
              disabled
              placeholder="답변"
              className="rounded-lg border-[1px] border-solid bg-zinc-50 p-2 text-sm"
            />
          ) : (
            <label className="flex items-center gap-1 text-[16px]">
              <input type="radio" disabled />
              <input
                type="text"
                placeholder="옵션을 입력해주세요"
                className="ml-[-10px] scale-[0.8]"
              />
            </label>
          )}
        </Box>
      ))}
      <div className="flex w-full justify-end">
        <button
          onClick={() => {
            setQuestionList((prev) => [...prev, defaultQuestion]);
          }}
          className="btn fixed bottom-[70px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white p-3 text-[30rem] font-bold text-primary shadow-[1px_2px_10px_0px_rgba(0,0,0,0.1)]"
        >
          <TbPlus size={30} />
        </button>
      </div>
      <SubmitButton content="업로드" />
    </form>
  );
};
