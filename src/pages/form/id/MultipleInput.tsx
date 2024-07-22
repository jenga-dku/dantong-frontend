export const MultipleInput = ({
  surveyItemId,
  options,
  onChange,
}: {
  surveyItemId: number;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex flex-col gap-3">
    {options.map((option) => (
      <label className="flex cursor-pointer items-center gap-1 text-[15px]">
        <input
          name={`${surveyItemId}`}
          type="radio"
          value={option}
          onChange={onChange}
        />
        <p className="ml-[-1px]">{option}</p>
      </label>
    ))}
  </div>
);
