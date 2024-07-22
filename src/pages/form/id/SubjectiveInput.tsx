export const SubjectiveInput = ({
  surveyItemId,
  onChange,
}: {
  surveyItemId: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    type="text"
    placeholder="답변"
    name={`${surveyItemId}`}
    onChange={onChange}
    className="rounded-lg border-[1px] border-solid bg-zinc-50 p-2"
  />
);
