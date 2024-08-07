import { GoChevronRight } from 'react-icons/go';
import { Box } from '@/components/ui/Box';
import { PeriodPicker } from '@components/period-picker';
import { useEffect, useState } from 'react';
import { PostListModal, PostModalState } from './PostListModal';
import { FormUpload } from '@api/form-upload/types';
import { getFormattedDate } from '@utils/getFormattedDate';
import { Period } from '@src/types/period-picker/period';

export const FormHeader = ({
  periodState,
  formUploadInfoState,
}: {
  periodState: [Period, React.Dispatch<React.SetStateAction<Period>>];
  formUploadInfoState: [
    FormUpload,
    React.Dispatch<React.SetStateAction<FormUpload>>,
  ];
}) => {
  const [period] = periodState;
  const [postModalState, setPostModalState] = useState<PostModalState>({
    visible: false,
    selectedPostTitle: '',
  });
  const [formUploadInfo, setFormUploadInfo] = formUploadInfoState;

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormUploadInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setFormUploadInfo((prev) => ({
      ...prev,
      startTime: `${getFormattedDate(period.start)}`,
      endTime: `${getFormattedDate(period.end)}`,
    }));
  }, [period]);

  return (
    <Box className="flex-col gap-2">
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        className="text-xl"
        name="title"
        value={formUploadInfo.title}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <textarea
        name="description"
        value={formUploadInfo.description}
        onChange={(e) => {
          handleInputChange(e);
        }}
        placeholder="설명을 입력해주세요"
        className="leading-[1.2]"
      ></textarea>
      <button
        type="button"
        onClick={() => {
          setPostModalState((prev) => ({ ...prev, visible: true }));
        }}
        className="flex cursor-pointer items-center justify-between gap-1 rounded-md border-[1px] border-solid border-zinc-300 px-3 py-2 text-xs leading-none text-zinc-600"
      >
        <span>글 선택</span>
        <span className="w-[40vw] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap ">
          {postModalState.selectedPostTitle}
        </span>
        <span>
          <GoChevronRight />
        </span>
      </button>
      <PeriodPicker periodState={periodState} />
      {postModalState.visible && (
        <PostListModal
          updatePostModalState={setPostModalState}
          updateFormUploadInfo={setFormUploadInfo}
        />
      )}
    </Box>
  );
};
