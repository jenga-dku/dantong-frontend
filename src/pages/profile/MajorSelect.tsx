import { Major, MAJOR } from '@/types/major';
import { getMajorKoreanName } from '@/utils/getMajorKoreanName';

export const MajorSelect = ({
  majorName,
  handleInputChange,
}: {
  majorName: Major;
  handleInputChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => void;
}) => (
  <div className="w-full rounded-md text-xs text-primary">
    <select
      className="select select-bordered h-fit min-h-fit w-full p-3 text-gray-400"
      name="majorName"
      onChange={handleInputChange}
    >
      <option disabled selected>
        {getMajorKoreanName(majorName)}
      </option>
      {Object.entries(MAJOR)
        .filter(([id]) => id !== majorName)
        .map(([id, major]) => (
          <option value={id}>{major}</option>
        ))}
    </select>
  </div>
);
