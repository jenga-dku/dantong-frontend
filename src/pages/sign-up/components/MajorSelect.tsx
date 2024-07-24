import { useSignUpInfoStore } from '@/stores/signUpInfo-stores';
import { MAJOR } from '@/types/major';

export const MajorSelect = ({
  activateNextInputIndex,
}: {
  activateNextInputIndex: () => void;
}) => {
  const { signUpInfo, setSignUpInfo } = useSignUpInfoStore();
  return (
    <div
      className={`border-b-2 border-solid ${signUpInfo.major.length === 0 ? 'border-primary' : 'border-[#CAD4E0]'}`}
    >
      <p className="p-0 pb-1 pl-2 font-NanumSquareBold text-sm text-[#aaa]">
        전공
      </p>
      <select
        className="select w-full p-0 pl-2 font-NanumSquareBold text-xl"
        name="category"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setSignUpInfo({ ...signUpInfo, major: e.target.value });
          activateNextInputIndex();
        }}
      >
        <option disabled selected>
          전공 선택
        </option>
        {Object.entries(MAJOR).map(([id, majorName]) => (
          <option value={id}>{majorName}</option>
        ))}
      </select>
    </div>
  );
};
