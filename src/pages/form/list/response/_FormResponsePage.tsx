import { useSearchParams } from 'react-router-dom';
import { FormLayout } from '@layout/FormLayout';
import { useGetAllUsersReply, useGetForm } from '@query-hooks/form';
import { Loader } from '@/components/ui/Loader';
import { QuestionBox } from '../../id/QuestionBox';
import { Answer } from './Answer';
import { ExportExcelButton } from './ExportExcelButton';

export const FormResponsePage = () => {
  const [searchParams] = useSearchParams();
  const formId = Number(searchParams.get('id'));
  const { data: formInfo, isFetching: isLoadingForm } = useGetForm(formId);
  const { data: replyResponse } = useGetAllUsersReply(formId);

  if (isLoadingForm)
    return <Loader loading={isLoadingForm} type="clip" size={55} />;

  return (
    <FormLayout
      formInfo={formInfo!}
      exportButton={<ExportExcelButton formId={formId} formInfo={formInfo!} />}
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
  );
};
