import { useState } from 'react';
import { useGetForm, useSubmitForm } from '@query-hooks/form';
import { SubmitButton } from '@components/SubmitButton';
import { useParams } from 'react-router-dom';
import { FormAnswer } from '@api/form/types';
import { useModal } from '@/hooks/modal/useModal';
import { useAuthStore } from '@stores/auth-stores';
import { FormLayout } from '@layout/FormLayout';
import { Question } from './Question';

export const FormPage = () => {
  const { id: formId } = useParams();
  const { data: formInfo, isLoading: isFormLoading } = useGetForm(
    Number(formId),
  );
  const [userAnswerList, setUserAnswerList] = useState<FormAnswer[]>([]);
  const { mutate: postAnswer } = useSubmitForm();
  const { open } = useModal();
  const { isLoggedIn } = useAuthStore();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLoggedIn
      ? open({
          title: '폼 제출',
          desc: '폼을 제출하시겠습니까?',
          option: {
            type: 'CONFIRM',
            confirmEvent: () => {
              postAnswer({
                formId: Number(formId),
                answerList: userAnswerList,
              });
            },
          },
        })
      : open({
          title: '회원 전용',
          desc: '로그인 이후 이용 가능합니다',
        });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const questionId = Number(name);

    setUserAnswerList((prev) => [
      ...prev.filter((item) => item.surveyItemId !== questionId),
      {
        content: value,
        surveyItemId: questionId,
      },
    ]);
  };

  if (isFormLoading) return <></>;
  return (
    <FormLayout formInfo={formInfo!}>
      <form className="flex flex-col gap-5" onSubmit={submitForm}>
        {formInfo?.surveyItems.map(
          ({ surveyItemId, tag, title, description, options }) => (
            <Question
              surveyItemId={surveyItemId}
              tag={tag}
              title={title}
              description={description}
              options={options}
              handleInputChange={handleInputChange}
            />
          ),
        )}
        <SubmitButton content="제출" />
      </form>
    </FormLayout>
  );
};
