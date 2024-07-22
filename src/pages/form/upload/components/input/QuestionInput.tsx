import { FormUploadState } from '@/types/form';

type Input = {
  name: 'title' | 'description';
  placeholder: string;
};

export const QuestionInput = ({
  questionList,
  questionIndex,
  dispatch,
  placeholder,
  name,
}: FormUploadState & Input) => (
  <input
    type="text"
    name={name}
    className={`${name === 'description' && 'ml-[-35px] scale-[0.8] text-[16px] text-zinc-500'}`}
    placeholder={placeholder}
    value={questionList[questionIndex][name]}
    onChange={(e) => {
      dispatch({
        type: 'handleInputChange',
        questionIndex,
        inputName: e.target.name,
        inputValue: e.target.value,
      });
    }}
  />
);
