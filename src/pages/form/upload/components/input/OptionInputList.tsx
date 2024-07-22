import { FormUploadState } from '@/types/form';
import { PiTrashLight } from 'react-icons/pi';
import { AddOptionButton } from '../button/AddOptionButton';

export const OptionInputList = ({
  questionList,
  questionIndex,
  dispatch,
}: FormUploadState) => (
  <div className="flex w-full flex-col gap-2">
    {questionList[questionIndex].options.map((option, optionIndex) => (
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
    <AddOptionButton dispatch={dispatch} questionIndex={questionIndex} />
  </div>
);
