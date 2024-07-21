import { useSearchParams } from 'react-router-dom';
import { FormLayout } from '@layout/FormLayout';
import { useGetAllUsersReply, useGetForm } from '@query-hooks/form';
import { Loader } from '@components/Loader';
import { QuestionBox } from '../../id/QuestionBox';
import { Answer } from './Answer';
import { API_BASE_URL } from '@/constant';

export const FormResponsePage = () => {
  const [searchParams] = useSearchParams();
  const formID = Number(searchParams.get('id'));
  const {
    data: formInfo,
    isSuccess: isLoadFormSuccess,
    isFetching: isLoadingForm,
  } = useGetForm(formID);

  const { data: replyResponse } = useGetAllUsersReply(formID);

  return isLoadFormSuccess ? (
    <FormLayout
      formInfo={formInfo!}
      exportButton={
        <a
          href={`${API_BASE_URL}/excel/download?fileName=${formInfo.title}&surveyId=${formID}`}
          className="cursor-pointer underline"
        >
          Excel로 저장하기
        </a>
      }
    >
      {replyResponse?.map(
        ({ surveyItemResponse: { title, description }, replies }) => (
          <QuestionBox title={title} description={description}>
            {replies.map(({ content }) => (
              <Answer content={content} />
            ))}
          </QuestionBox>
        ),
      )}
    </FormLayout>
  ) : (
    <Loader loading={isLoadingForm} type="clip" size={55} />
  );
};
