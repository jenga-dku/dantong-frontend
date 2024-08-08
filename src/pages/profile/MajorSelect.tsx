import { Major, MAJOR } from '@/types/major';
import { getMajorKoreanName } from '@/utils/getMajorKoreanName';

export const MajorSelect = ({
  major,
  handleInputChange,
}: {
  major: Major;
  handleInputChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => void;
}) => (
  <div className="w-full rounded-md text-xs text-primary">
    <select
      className="select select-bordered h-fit min-h-fit w-full p-3 text-gray-400"
      name="major"
      onChange={handleInputChange}
    >
      <option disabled selected>
        {getMajorKoreanName(major)}
      </option>
      {Object.entries(MAJOR)
        .filter(([id]) => id !== major)
        .map(([id, major]) => (
          <option value={id}>{major}</option>
        ))}
    </select>
  </div>
);
