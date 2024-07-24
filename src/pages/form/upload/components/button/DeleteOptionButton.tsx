import { FormUploadState } from '@/types/form';
import { PiTrashLight } from 'react-icons/pi';

type DeleteOptionButtonProps = { optionIndex: number } & Omit<
  FormUploadState,
  'questionList'
>;

export const DeleteOptionButton = ({
  dispatch,
  questionIndex,
  optionIndex,
}: DeleteOptionButtonProps) => (
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
);
