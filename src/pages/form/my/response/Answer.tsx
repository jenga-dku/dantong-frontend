import { Loader } from '@/components/ui/Loader';
import { useGetMyAnswer } from '@query-hooks/form';

export const Answer = ({ questionId }: { questionId: number }) => {
  const {
    data: answer,
    isSuccess: isAnswerListLoad,
    isFetching,
  } = useGetMyAnswer(questionId);
  return (
    <>
      {isAnswerListLoad ? (
        <p className="rounded-md bg-[#f6f6f6] px-4 py-3 text-sm">
          {answer.content}
        </p>
      ) : (
        <Loader loading={isFetching} size={15} type="clip" className="my-5" />
      )}
    </>
  );
};
