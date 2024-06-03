import { useEffect, useState } from 'react';
import { useGetForm } from '../../query-hooks/form';
import { Box } from '../../components/Box';
import { handleDateFormat } from '../../utils/handleDateFomat';
import { SubmitButton } from '../../components/SubmitButton';
import { useTopBarStore } from '../../stores/topBar-stores';
import { useParams } from 'react-router-dom';
import { CiCalendar } from 'react-icons/ci';

export const FormPage = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetForm(Number(id));

  useEffect(() => {
    useTopBarStore.setState({
      isBackButtonVisible: true,
      isNotificationButtonVisible: false,
    });
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
                className="rounded-lg border-[1px] border-solid bg-zinc-50 p-2 text-sm"
              />
            )}
            {tag === 'MULTIPLE' && (
              <div className="flex flex-col gap-2">
                {options.map((option) => (
                  <label className="flex cursor-pointer items-center text-[16px]">
                    <input name={`${surveyItemId}`} type="radio" />
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
