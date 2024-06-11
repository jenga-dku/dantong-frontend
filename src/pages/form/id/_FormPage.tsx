import { useEffect, useState } from 'react';
import { useGetForm, useSubmitForm } from '../../../query-hooks/form';
import { SubmitButton } from '../../../components/SubmitButton';
import { useTopBarStore } from '../../../stores/topBar-stores';
import { useParams } from 'react-router-dom';
import { FormAnswer } from '../../../api/form/types';
import { useModal } from '../../../hooks/useModal';
import { useAuthStore } from '../../../stores/auth-stores';
import { FormLayout } from '../../../layout/FormLayout';
import { QuestionBox } from './QuestionBox';
import { SubjectiveInput } from './SubjectiveInput';
import { MultipleInput } from './MultipleInput';

export const FormPage = () => {
  const { id: formID } = useParams();
  const { data: formInfo, isSuccess: isLoadFormSuccess } = useGetForm(
    Number(formID),
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
                formID: Number(formID),
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
    const questionID = Number(name);

    setUserAnswerList((prev) => [
      ...prev.filter((item) => item.surveyItemId !== questionID),
      {
        content: value,
        surveyItemId: questionID,
      },
    ]);
  };

  return isLoadFormSuccess ? (
    <FormLayout formInfo={formInfo}>
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        {formInfo?.surveyItems.map(
          ({ surveyItemId, tag, title, description, options }) => (
            <QuestionBox
              key={`SurveryItem-${surveyItemId}`}
              title={title}
              description={description}
            >
              {tag === 'SUBJECTIVE' && (
                <SubjectiveInput
                  surveyItemId={surveyItemId}
                  onChange={handleInputChange}
                />
              )}
              {tag === 'MULTIPLE' && (
                <MultipleInput
                  options={options}
                  surveyItemId={surveyItemId}
                  onChange={handleInputChange}
                />
              )}
            </QuestionBox>
          ),
        )}
        <SubmitButton content="제출" />
      </form>
    </FormLayout>
  ) : (
    <></>
  );
};
