import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useReducer, useState } from 'react';
import { Box } from '@/components/ui/Box';
import { Period } from '@src/types/period-picker/period';
import { FormUpload, Question } from '@api/form-upload/types';
import { SubmitButton } from '@components/ui/Button';
import { useTopBarStore } from '@stores/topBar-stores';
import { useModal } from '@/hooks/modal/useModal';
import { useCreateForm } from '@query-hooks/form-upload';
import { FormUploadActionType } from '@/types/form';
import { FormHeader } from './FormHeader';
import { QuestionHeader } from './QuestionHeader';
import { QuestionInput } from './components/input/QuestionInput';
import { AddQuestionButton } from './components/button/AddQuestionButton';
import { SubjectiveInput } from './components/input/SubjectiveInput';
import { OptionInputList } from './components/input/OptionInputList';

const initialQuestionState: Question = {
  tag: 'SUBJECTIVE',
  title: '',
  description: '',
  options: [''],
};
const initialFormUploadInfo = {
  title: '',
  description: '',
  postId: 0,
  startTime: '',
  endTime: '',
  surveyItems: [],
};

export const FormUploadPage = () => {
  const [questionList, dispatch] = useReducer(reducer, [initialQuestionState]);
  const formUploadInfoState = useState<FormUpload>(initialFormUploadInfo);
  const [formUploadInfo, setFormUploadInfo] = formUploadInfoState;
  const periodState = useState<Period>({
    start: new Date(),
    end: new Date(),
  });
  const { mutate: createForm } = useCreateForm();
  const { open } = useModal();

  useEffect(() => {
    setFormUploadInfo((prev) => ({ ...prev, surveyItems: questionList }));
  }, [questionList]);

  const uploadForm = () => {
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

  function reducer(
    state: Question[],
    action: FormUploadActionType,
  ): Question[] {
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

  return (
    <div className="flex flex-col gap-5">
      <FormHeader
        periodState={periodState}
        formUploadInfoState={formUploadInfoState}
      />
      {questionList.map(({ tag: questionType }, questionIndex) => (
        <Box className="flex flex-col gap-3" key={`question-${questionIndex}`}>
          <QuestionHeader
            questionIndex={questionIndex}
            questionList={questionList}
            dispatch={dispatch}
          />
          <QuestionInput
            name="title"
            questionIndex={questionIndex}
            questionList={questionList}
            dispatch={dispatch}
            placeholder="질문을 입력해주세요"
          />
          <QuestionInput
            name="description"
            questionIndex={questionIndex}
            questionList={questionList}
            dispatch={dispatch}
            placeholder="설명을 입력해주세요"
          />

          {questionType === 'SUBJECTIVE' && <SubjectiveInput />}
          {questionType === 'MULTIPLE' && (
            <OptionInputList
              dispatch={dispatch}
              questionList={questionList}
              questionIndex={questionIndex}
            />
          )}
        </Box>
      ))}
      <AddQuestionButton dispatch={dispatch} />
      <SubmitButton content="업로드" onClick={() => uploadForm()} />
    </div>
  );
};
