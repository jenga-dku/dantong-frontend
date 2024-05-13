import { useEffect } from 'react';
import { useGetForm } from '../../query-hooks/form';
import { Box } from '../../components/Box';
import { handleDateFormat } from '../../utils/handleDateFomat';
import { SubmitButton } from '../../components/SubmitButton';
import { useTopBarStore } from '../../stores/topBar-stores';

export const FormPage = () => {
  const { data, isSuccess } = useGetForm(4);

  useEffect(() => {
    useTopBarStore.setState({ isBackButtonVisible: true });
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
        <p className="w-fit rounded-sm bg-blue-100 px-2 text-sm text-zinc-500">{`${handleDateFormat(data?.startTime)} ~ ${handleDateFormat(data?.endTime)}`}</p>
        <p className="mt-2 text-sm">{data?.description}</p>
      </Box>
      {data?.surveyItems.map(
        ({ surveyItemId, tag, title, description }, index) => (
          <Box key={`SurveryItem-${surveyItemId}`} className="flex-col">
            <p className="mb-1">{title}</p>
            <p className="text-sm">{description}</p>
            {tag === 'SUBJECTIVE' && (
              <input
                required={true}
                className="mt-3 flex flex-col justify-between border-b-2 border-solid border-primary pb-1 pl-2 pr-5 text-lg transition delay-150 ease-in-out  invalid:border-[#CAD4E0]"
                onChange={() => {}}
              />
            )}
          </Box>
        ),
      )}
      <SubmitButton type="submit" content="제출" size="full" />
    </form>
  ) : (
    <></>
  );
};
