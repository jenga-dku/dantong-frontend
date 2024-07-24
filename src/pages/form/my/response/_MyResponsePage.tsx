import { useSearchParams } from 'react-router-dom';
import { FormLayout } from '@layout/FormLayout';
import { useGetForm, useGetMySubmit } from '@query-hooks/form';
import { Loader } from '@components/Loader';
import { QuestionBox } from '../../id/QuestionBox';
import { Answer } from '../../list/response/Answer';

export const MyResponsePage = () => {
  const [searchParams] = useSearchParams();

  const formId = Number(searchParams.get('id'));
  const {
    data: formInfo,
    isSuccess: isLoadFormSuccess,
    isFetching,
  } = useGetForm(formId);
  const { data: mySubmit, isSuccess: isLoadSubmitSuccess } =
    useGetMySubmit(formId);

  if (isLoadFormSuccess && isLoadSubmitSuccess)
    return (
      <FormLayout formInfo={formInfo!}>
        {mySubmit?.surveyReplies.map(
          ({ surveyItem: { title, description }, content }) => (
            <QuestionBox title={title} description={description}>
              <Answer content={content} />
            </QuestionBox>
          ),
        )}
      </FormLayout>
    );
  return <Loader loading={isFetching} type="clip" size={55} />;
};
