import { FormUploadState } from '@/types/form';
import { TbPlus } from 'react-icons/tb';

export const AddQuestionButton = ({
  dispatch,
}: Pick<FormUploadState, 'dispatch'>) => (
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
);
