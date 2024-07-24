import { SurveyItem } from '@/api/form/types';
import { MultipleInput } from './MultipleInput';
import { QuestionBox } from './QuestionBox';
import { SubjectiveInput } from './SubjectiveInput';

type QuestionProps = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & SurveyItem;

export const Question = ({
  surveyItemId,
  tag,
  title,
  description,
  options,
  handleInputChange,
}: QuestionProps) => (
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
);
