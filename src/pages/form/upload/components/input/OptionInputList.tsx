import { FormUploadState } from '@/types/form';
import { AddOptionButton } from '../button/AddOptionButton';
import { OptionInput } from './OptionInput';

export const OptionInputList = ({
  questionList,
  questionIndex,
  dispatch,
}: FormUploadState) => (
  <div className="flex w-full flex-col gap-2">
    {questionList[questionIndex].options.map((option, optionIndex) => (
      <label className="flex w-full items-center justify-between text-[16px]">
        <OptionInput
          option={option}
          optionIndex={optionIndex}
          questionIndex={questionIndex}
          dispatch={dispatch}
        />
      </label>
    ))}
    <AddOptionButton dispatch={dispatch} questionIndex={questionIndex} />
  </div>
);
