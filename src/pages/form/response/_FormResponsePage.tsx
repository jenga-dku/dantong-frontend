import { useSearchParams } from 'react-router-dom';
import { FormLayout } from '../../../layout/FormLayout';
import { useGetForm } from '../../../query-hooks/form';
import { Loader } from '../../../components/Loader';
import { QuestionBox } from '../id/QuestionBox';
import { Answer } from './Answer';
import { API_BASE_URL } from '../../../constant';

export const FormResponsePage = () => {
  const [searchParams] = useSearchParams();

  const formID = Number(searchParams.get('id'));
  const {
    data: formInfo,
    isSuccess: isLoadFormSuccess,
    isFetching,
  } = useGetForm(formID);

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
      {formInfo.surveyItems.map(
        ({ surveyItemId: questionID, title, description }) => (
          <QuestionBox title={title} description={description}>
            <Answer questionID={questionID} />
          </QuestionBox>
        ),
      )}
    </FormLayout>
  ) : (
    <Loader loading={isFetching} type="clip" size={55} />
  );
};
