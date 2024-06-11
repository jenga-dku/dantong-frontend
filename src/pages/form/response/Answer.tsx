import { FormAnswer } from '../../../api/form/types';
import { Loader } from '../../../components/Loader';
import { useGetAnswerListOfQuestion } from '../../../query-hooks/form';

export const Answer = ({ questionID }: { questionID: number }) => {
  const {
    data: answerList,
    isSuccess: isAnswerListLoad,
    isFetching,
  } = useGetAnswerListOfQuestion(questionID);
  return (
    <>
      {isAnswerListLoad ? (
        answerList.map((answer: FormAnswer) => (
          <p className="rounded-md bg-[#f6f6f6] px-4 py-3 text-sm">
            {answer.content}
          </p>
        ))
      ) : (
        <Loader loading={isFetching} size={15} type="clip" className="my-5" />
      )}
    </>
  );
};
