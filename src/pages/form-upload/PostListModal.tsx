import React from 'react';
import { Button } from '../../components/Button';
import { useGetInfinitePostList } from '../../query-hooks/post';
import { getCategoryKoreanName } from '../../utils/getCategoryKoreanName';
import { FormUpload } from '../../api/form-upload/types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { PostDetailResponse } from '../../api/post/types';
import { Loader } from '../../components/Loader';
import { Intersection } from '../../components/Intersection';

export type PostModalState = {
  visible: boolean;
  selectedPostTitle: string;
};

export const PostListModal = ({
  updatePostModalState,
  updateFormUploadInfo,
}: {
  updatePostModalState: React.Dispatch<React.SetStateAction<PostModalState>>;
  updateFormUploadInfo: React.Dispatch<React.SetStateAction<FormUpload>>;
}) => {
  const postListState = useGetInfinitePostList({
    category: '',
    size: 5,
  });

  const {
    list: postList,
    intersection,
    isFetching,
  } = useIntersectionObserver<PostDetailResponse>(postListState);

  return (
    <div className="absolute left-0 top-0 z-[51] flex  h-full w-full flex-col items-center justify-center bg-[#00000080]">
      <div className="flex h-[300px] w-[calc(100%-30px)] flex-col justify-center gap-2 overflow-hidden rounded-2xl bg-white p-5">
        <p className="w-full text-center font-bold">글 선택</p>
        <div className="flex h-[280px] w-full flex-col gap-4 overflow-y-scroll p-2">
          {postList?.map(({ postId, title, category, postFileResponse }) => (
            <div
              key={`Post-Modal-${postId}`}
              onClick={() => {
                updateFormUploadInfo((prev) => ({ ...prev, postId }));
                updatePostModalState((prev) => ({
                  selectedPostTitle: title,
                  visible: false,
                }));
              }}
              className="flex cursor-pointer items-center gap-4"
            >
              {postFileResponse.length > 0 ? (
                <img
                  className="h-[50px] w-[50px] rounded-md border-[1px] border-solid border-zinc-300"
                  src={postFileResponse[0].url ?? ''}
                  alt={postFileResponse[0].originalName ?? ''}
                />
              ) : (
                <div className="h-[50px] w-[50px] rounded-md bg-slate-200" />
              )}
              <div className="flex w-[calc(100%-60px)] flex-col gap-1 overflow-hidden ">
                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                  {title}
                </p>
                <p className="text-xs text-primary">
                  {getCategoryKoreanName(category)}
                </p>
              </div>
            </div>
          ))}
          <Intersection ref={intersection} />
          <Loader size={10} loading={isFetching} />
        </div>
        <Button
          content="확인"
          onClick={() => {
            updatePostModalState((prev) => ({ ...prev, visible: false }));
          }}
          className="h-[40px] min-h-[40px] p-0 text-[0.9rem] font-normal"
        />
      </div>
    </div>
  );
};
