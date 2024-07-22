import { ChangeEvent, HTMLAttributes, ReactNode } from 'react';
import { QuestionType } from '@api/form-upload/types';

export type QuestionTypeButtonChangeEvent = ChangeEvent<HTMLInputElement> & {
  target: { value: QuestionType };
};

type QuestionTypeButton = HTMLAttributes<HTMLInputElement> & {
  value: QuestionType;
  onChange: (e: QuestionTypeButtonChangeEvent) => void;
  checked: boolean;
  icon: ReactNode;
  index: number;
};

export const QuestionTypeButton = ({
  value,
  onChange,
  checked,
  icon,
  index,
  ...props
}: QuestionTypeButton) => {
  return (
    <label className="flex cursor-pointer gap-1 has-[:checked]:text-black">
      <input
        className="hidden"
        name={`question-type-${index}`}
        type="radio"
        value={value}
        onChange={onChange}
        checked={checked}
        {...props}
      />
      {icon} <span className="text-xs">{typeValue[value]}</span>
    </label>
  );
};

const typeValue = {
  SUBJECTIVE: '주관식',
  MULTIPLE: '객관식',
};
