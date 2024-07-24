import { FormUploadState } from '@/types/form';
import { DeleteOptionButton } from '../button/DeleteOptionButton';

type OptionInputProps = {
  option: string;
  optionIndex: number;
} & Omit<FormUploadState, 'questionList'>;

export const OptionInput = ({
  option,
  dispatch,
  questionIndex,
  optionIndex,
}: OptionInputProps) => (
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
    <DeleteOptionButton
      dispatch={dispatch}
      questionIndex={questionIndex}
      optionIndex={optionIndex}
    />
  </div>
);
