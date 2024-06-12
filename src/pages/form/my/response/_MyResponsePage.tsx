import { useSearchParams } from 'react-router-dom';
import { FormLayout } from '../../../../layout/FormLayout';
import { useGetForm, useGetMySubmit } from '../../../../query-hooks/form';
import { Loader } from '../../../../components/Loader';
import { QuestionBox } from '../../id/QuestionBox';
import { Answer } from '../../list/response/Answer';

export const MyResponsePage = () => {
  const [searchParams] = useSearchParams();

  const formID = Number(searchParams.get('id'));
  const {
    data: formInfo,
    isSuccess: isLoadFormSuccess,
    isFetching,
  } = useGetForm(formID);
  const { data: mySubmit, isSuccess: isLoadSubmitSuccess } =
    useGetMySubmit(formID);

  return isLoadFormSuccess && isLoadSubmitSuccess ? (
    <FormLayout formInfo={formInfo!}>
      {mySubmit?.surveyReplies.map(
        ({ surveyItem: { title, description }, content }) => (
          <QuestionBox title={title} description={description}>
            <Answer content={content} />
          </QuestionBox>
        ),
      )}
    </FormLayout>
  ) : (
    <Loader loading={isFetching} type="clip" size={55} />
  );
};
