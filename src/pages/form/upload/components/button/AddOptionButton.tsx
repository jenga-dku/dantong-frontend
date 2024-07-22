import { FormUploadState } from '@/types/form';

export const AddOptionButton = ({
  dispatch,
  questionIndex,
}: Omit<FormUploadState, 'questionList'>) => (
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
    <p className="ml-[-1px] scale-[0.8] text-zinc-400">옵션 추가하기</p>
  </button>
);
