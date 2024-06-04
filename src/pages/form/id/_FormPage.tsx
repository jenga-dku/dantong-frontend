import { useEffect, useState } from 'react';
import { useGetForm, useSubmitForm } from '../../../query-hooks/form';
import { Box } from '../../../components/Box';
import { handleDateFormat } from '../../../utils/handleDateFomat';
import { SubmitButton } from '../../../components/SubmitButton';
import { useTopBarStore } from '../../../stores/topBar-stores';
import { useParams } from 'react-router-dom';
import { CiCalendar } from 'react-icons/ci';
import { FormAnswer } from '../../../api/form/types';
import { useAuthStore } from '../../../stores/auth-stores';
import { useModal } from '../../../hooks/useModal';

export const FormPage = () => {
  const { id: formID } = useParams();
  const { data, isSuccess } = useGetForm(Number(formID));
  const [userAnswerList, setUserAnswerList] = useState<FormAnswer[]>([]);
  const { mutate: postAnswer } = useSubmitForm();
  const { open } = useModal();
  const {
    userInfo: { studentID },
  } = useAuthStore();

  useEffect(() => {
    useTopBarStore.setState({
      isBackButtonVisible: true,
      isNotificationButtonVisible: false,
    });
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    open({
      title: '폼 제출',
      desc: '폼을 제출하시겠습니까?',
      option: {
        type: 'CONFIRM',
        confirmEvent: () => {
          postAnswer(userAnswerList);
        },
      },
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
        userId: Number(studentID),
      },
    ]);
  };

  return isSuccess ? (
    <form
      className="group-[]: flex flex-col gap-5"
      onSubmit={(e) => {
        submitForm(e);
      }}
    >
      <Box className="flex-col gap-1">
        <h1 className="text-lg font-bold">{data?.title}</h1>
        <p className="text-sm">{data?.description}</p>
        <p className="mt-2 flex items-center gap-1 text-xs leading-none">
          <CiCalendar size={17} />
          {` ~ ${handleDateFormat(data?.endTime)}`}
        </p>
      </Box>
      {data?.surveyItems.map(
        ({ surveyItemId, tag, title, description, options }, index) => (
          <Box key={`SurveryItem-${surveyItemId}`} className="flex-col gap-3">
            <div>
              <p className="mb-2">{title}</p>
              <p className="text-[0.8rem] text-zinc-500">{description}</p>
            </div>
            {tag === 'SUBJECTIVE' && (
              <input
                type="text"
                placeholder="답변"
                name={`${surveyItemId}`}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="rounded-lg border-[1px] border-solid bg-zinc-50 p-2 text-sm"
              />
            )}
            {tag === 'MULTIPLE' && (
              <div className="flex flex-col gap-2">
                {options.map((option) => (
                  <label className="flex cursor-pointer items-center text-[16px]">
                    <input
                      name={`${surveyItemId}`}
                      type="radio"
                      value={option}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                    <p className="ml-[-1px] scale-[0.8]">{option}</p>
                  </label>
                ))}
              </div>
            )}
          </Box>
        ),
      )}
      <SubmitButton content="제출" />
    </form>
  ) : (
    <></>
  );
};
