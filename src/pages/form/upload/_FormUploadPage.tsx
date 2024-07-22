import { ReactNode, useEffect, useReducer, useState } from 'react';
import { Box } from '@components/Box';
import 'react-datepicker/dist/react-datepicker.css';
import { Period } from '@src/types/period-picker/period';
import { TbPlus } from 'react-icons/tb';
import { FormUpload, Question, QuestionType } from '@api/form-upload/types';
import { SubmitButton } from '@components/SubmitButton';
import { RiListRadio } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { BsTextareaT } from 'react-icons/bs';
import {
  QuestionTypeButton,
  QuestionTypeButtonChangeEvent,
} from './QuestionTypeButton';
import { Header } from './Header';
import { useTopBarStore } from '@stores/topBar-stores';
import { PiTrashLight } from 'react-icons/pi';
import { useModal } from '@hooks/useModal';
import { useCreateForm } from '@query-hooks/form-upload';

const initialQuestionState: Question = {
  tag: 'SUBJECTIVE',
  title: '',
  description: '',
  options: [''],
};

type ActionType = {
  type: string;
  questionIndex?: number;
  questionType?: QuestionType;
  inputName?: string;
  inputValue?: string;
  optionIndex?: number;
  optionValue?: string;
};

export const FormUploadPage = () => {
  const [questionList, dispatch] = useReducer(reducer, [initialQuestionState]);

  function reducer(state: Question[], action: ActionType): Question[] {
    switch (action.type) {
      case 'handleInputChange':
        return state.map((questionValue, qIndex) =>
          qIndex === action.questionIndex!
            ? {
                ...questionValue,
                [action.inputName!]: action.inputValue,
              }
            : questionValue,
        );
      case 'handleOptionChange':
        return state.map((questionValue, qIndex) =>
          qIndex === action.questionIndex
            ? {
                ...questionValue,
                options: questionValue.options.map((oValue, oIndex) =>
                  oIndex === action.optionIndex! ? action.optionValue! : oValue,
                ),
              }
            : questionValue,
        );
      case 'changeQuestionType':
        return state.map((questionValue, qIndex) =>
          qIndex === action.questionIndex
            ? {
                ...questionValue,
                tag: action.questionType!,
              }
            : questionValue,
        );
      case 'deleteQuestion':
        return state.filter((_, qIndex) => action.questionIndex !== qIndex);
      case 'deleteOption':
        return state.map((questionValue, qIndex) =>
          qIndex === action.questionIndex!
            ? {
                ...questionValue,
                options: questionValue.options.filter(
                  (_, oIndex) => action.optionIndex !== oIndex,
                ),
              }
            : questionValue,
        );
      case 'createQuestion':
        return [...state, initialQuestionState];

      case 'createOption':
        return state.map((questionValue, qIndex) =>
          qIndex === action.questionIndex!
            ? {
                ...questionValue,
                options: [...questionValue.options, ''],
              }
            : questionValue,
        );

      default:
        return state;
    }
  }

  const periodState = useState<Period>({
    start: new Date(),
    end: new Date(),
  });

  const formUploadInfoState = useState<FormUpload>({
    title: '',
    description: '',
    postId: 0,
    startTime: '',
    endTime: '',
    surveyItems: questionList,
  });

  const [formUploadInfo, setFormUploadInfo] = formUploadInfoState;

  const { open } = useModal();
  const { mutate: createForm } = useCreateForm();

  const uploadForm = () => {
    setFormUploadInfo((prev) => ({ ...prev, surveyItems: questionList }));
    console.log(formUploadInfo);
    open({
      title: '폼 생성',
      desc: '폼을 생성하시겠습니까?',
      option: {
        type: 'CONFIRM',
        confirmEvent: () => {
          createForm(formUploadInfo);
        },
      },
    });
  };

  useEffect(() => {
    useTopBarStore.setState({
      isBackButtonVisible: true,
      isNotificationButtonVisible: false,
    });
  }, []);

  type QuestionTypeButton = { type: QuestionType; icon: ReactNode };
  const questionTypeList: QuestionTypeButton[] = [
    { type: 'SUBJECTIVE', icon: <BsTextareaT /> },
    { type: 'MULTIPLE', icon: <RiListRadio /> },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Header
        periodState={periodState}
        formUploadInfoState={formUploadInfoState}
      />
      {questionList.map(({ tag: questionType, options }, questionIndex) => (
        <Box className="flex flex-col gap-3" key={`question-${questionIndex}`}>
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
          <input
            type="text"
            name="title"
            placeholder="질문을 입력해주세요"
            value={questionList[questionIndex].title}
            onChange={(e) => {
              dispatch({
                type: 'handleInputChange',
                questionIndex,
                inputName: e.target.name,
                inputValue: e.target.value,
              });
            }}
          />
          <input
            type="text"
            name="description"
            className="ml-[-35px] scale-[0.8] text-[16px] text-zinc-500"
            placeholder="설명을 입력해주세요"
            value={questionList[questionIndex].description}
            onChange={(e) => {
              dispatch({
                type: 'handleInputChange',
                questionIndex,
                inputName: e.target.name,
                inputValue: e.target.value,
              });
            }}
          />
          {questionType === 'SUBJECTIVE' ? (
            <input
              type="text"
              disabled
              placeholder="답변"
              className="rounded-lg border-[1px] border-solid bg-zinc-50 p-2 text-sm"
            />
          ) : (
            <div className="flex w-full flex-col gap-2">
              {options.map((option, optionIndex) => (
                <label className="flex w-full items-center justify-between text-[16px]">
                  <div>
                    <input type="radio" disabled />
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => {
                        dispatch({
                          type: 'handleOptionChange',
                          questionIndex,
                          optionIndex,
                          optionValue: e.target.value,
                        });
                      }}
                      placeholder="옵션을 입력해주세요"
                      className="ml-[-10px] scale-[0.8]"
                    />
                  </div>
                  <button className="text-zinc-400">
                    <PiTrashLight
                      onClick={() => {
                        dispatch({
                          type: 'deleteOption',
                          questionIndex,
                          optionIndex,
                        });
                      }}
                    />
                  </button>
                </label>
              ))}
              <button
                onClick={() => {
                  dispatch({
                    type: 'createOption',
                    questionIndex: questionIndex,
                  });
                }}
                className="flex cursor-pointer items-center text-[16px]"
              >
                <input type="radio" disabled />
                <p className="ml-[-1px] scale-[0.8] text-zinc-400">
                  옵션 추가하기
                </p>
              </button>
            </div>
          )}
        </Box>
      ))}
      <div className="flex w-full justify-end">
        <button
          onClick={() => {
            dispatch({
              type: 'createQuestion',
            });
          }}
          className="btn fixed bottom-[70px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white p-3 text-[30rem] font-bold text-primary shadow-[1px_2px_10px_0px_rgba(0,0,0,0.1)]"
        >
          <TbPlus size={30} />
        </button>
      </div>
      <SubmitButton content="업로드" onClick={() => uploadForm()} />
    </div>
  );
};
