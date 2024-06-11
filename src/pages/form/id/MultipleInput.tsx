export const MultipleInput = ({
  surveyItemId,
  options,
  onChange,
}: {
  surveyItemId: number;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex flex-col gap-2">
    {options.map((option) => (
      <label className="flex cursor-pointer items-center gap-1 text-[16px]">
        <input
          name={`${surveyItemId}`}
          type="radio"
          value={option}
          onChange={onChange}
        />
        <p className="ml-[-1px] scale-[0.8]">{option}</p>
      </label>
    ))}
  </div>
);
